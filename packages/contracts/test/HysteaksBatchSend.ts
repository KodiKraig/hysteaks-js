import { loadFixture } from '@nomicfoundation/hardhat-toolbox/network-helpers';
import hre from 'hardhat';
import { expect } from 'chai';
import { parseEther } from 'ethers';

describe('BatchSend', () => {
  async function deployBatchSend() {
    const [owner, otherAccount, nextAccount] = await hre.ethers.getSigners();

    const SteakToken = await hre.ethers.getContractFactory('SteakToken');
    const steakToken = await SteakToken.deploy();

    const BatchSend = await hre.ethers.getContractFactory('HysteaksBatchSend');
    const batchSend = await BatchSend.deploy();

    return { batchSend, owner, otherAccount, nextAccount, steakToken };
  }

  describe('Deployment', () => {
    it('roles are set correctly', async () => {
      const { batchSend, owner } = await loadFixture(deployBatchSend);

      const defaultAdminRole = await batchSend.DEFAULT_ADMIN_ROLE();
      const feeExemptRole = await batchSend.FEE_EXEMPT_ROLE();

      expect(await batchSend.hasRole(defaultAdminRole, owner.address)).to.be
        .true;
      expect(await batchSend.hasRole(feeExemptRole, owner.address)).to.be.true;
    });
  });

  // Batch Sending

  describe('Send Native Batch', () => {
    it('should send native tokens to multiple recipients with fee', async () => {
      const { batchSend, owner, otherAccount, nextAccount } =
        await loadFixture(deployBatchSend);

      const recipients = [otherAccount.address, nextAccount.address];

      const initialOwner = await hre.ethers.provider.getBalance(owner.address);
      const initialOther = await hre.ethers.provider.getBalance(
        otherAccount.address,
      );
      const initialNext = await hre.ethers.provider.getBalance(
        nextAccount.address,
      );
      const amounts = [parseEther('0.1'), parseEther('0.2')];

      const fee = await batchSend.calculateFee(amounts[0] + amounts[1]);

      const tx = await batchSend
        .connect(owner)
        .sendNativeBatch(recipients, amounts, {
          value: amounts[0] + amounts[1] + fee,
        });
      const receipt = await tx.wait();

      const gasCost = receipt!.gasUsed * receipt!.gasPrice;

      expect(await hre.ethers.provider.getBalance(owner.address)).to.equal(
        initialOwner - amounts[0] - amounts[1] - gasCost - fee,
      );
      expect(
        await hre.ethers.provider.getBalance(otherAccount.address),
      ).to.equal(amounts[0] + initialOther);
      expect(
        await hre.ethers.provider.getBalance(nextAccount.address),
      ).to.equal(amounts[1] + initialNext);
      expect(
        await hre.ethers.provider.getBalance(batchSend.getAddress()),
      ).to.equal(fee);
    });

    it('should send native tokens to multiple recipients with fee exemption', async () => {
      const { batchSend, owner, otherAccount, nextAccount } =
        await loadFixture(deployBatchSend);

      const recipients = [otherAccount.address, nextAccount.address];

      const initialOwner = await hre.ethers.provider.getBalance(owner.address);
      const initialOther = await hre.ethers.provider.getBalance(
        otherAccount.address,
      );
      const initialNext = await hre.ethers.provider.getBalance(
        nextAccount.address,
      );
      const amounts = [parseEther('0.1'), parseEther('0.2')];

      let tx = await batchSend.connect(owner).setFeeExempt(owner.address, true);
      let receipt = await tx.wait();

      let gasCost = receipt!.gasUsed * receipt!.gasPrice;

      tx = await batchSend.connect(owner).sendNativeBatch(recipients, amounts, {
        value: amounts[0] + amounts[1],
      });
      receipt = await tx.wait();

      gasCost += receipt!.gasUsed * receipt!.gasPrice;

      expect(await hre.ethers.provider.getBalance(owner.address)).to.equal(
        initialOwner - amounts[0] - amounts[1] - gasCost,
      );
      expect(
        await hre.ethers.provider.getBalance(otherAccount.address),
      ).to.equal(amounts[0] + initialOther);
      expect(
        await hre.ethers.provider.getBalance(nextAccount.address),
      ).to.equal(amounts[1] + initialNext);
      expect(
        await hre.ethers.provider.getBalance(batchSend.getAddress()),
      ).to.equal(0);
    });

    it('should send native tokens without fee when fee is 0', async () => {
      const { batchSend, owner, otherAccount, nextAccount } =
        await loadFixture(deployBatchSend);

      await batchSend.connect(owner).setFee(0);

      const initialOwner = await hre.ethers.provider.getBalance(owner.address);

      const recipients = [otherAccount.address, nextAccount.address];
      const amounts = [parseEther('0.1'), parseEther('0.2')];

      const tx = await batchSend
        .connect(owner)
        .sendNativeBatch(recipients, amounts, {
          value: amounts[0] + amounts[1],
        });

      const receipt = await tx.wait();

      const gasCost = receipt!.gasUsed * receipt!.gasPrice;

      expect(await hre.ethers.provider.getBalance(owner.address)).to.equal(
        initialOwner - amounts[0] - amounts[1] - gasCost,
      );
      expect(
        await hre.ethers.provider.getBalance(batchSend.getAddress()),
      ).to.equal(0);
    });

    it('should emit a NativeBatchSent event', async () => {
      const { batchSend, owner, otherAccount, nextAccount } =
        await loadFixture(deployBatchSend);

      await batchSend.connect(owner).setFeeExempt(owner.address, true);

      const recipients = [otherAccount.address, nextAccount.address];
      const amounts = [parseEther('0.1'), parseEther('0.2')];

      await expect(
        batchSend.connect(owner).sendNativeBatch(recipients, amounts, {
          value: amounts[0] + amounts[1],
        }),
      ).to.emit(batchSend, 'NativeBatchSent');
    });

    it('should revert if the fee is not paid', async () => {
      const { batchSend, owner, otherAccount, nextAccount } =
        await loadFixture(deployBatchSend);

      const recipients = [otherAccount.address, nextAccount.address];
      const amounts = [parseEther('0.1'), parseEther('0.2')];

      await expect(
        batchSend.connect(owner).sendNativeBatch(recipients, amounts, {
          value: amounts[0] + amounts[1],
        }),
      ).to.be.revertedWith('Insufficient funds for fee');
    });

    it('should revert if the recipients array is empty', async () => {
      const { batchSend, owner } = await loadFixture(deployBatchSend);
      await expect(
        batchSend.connect(owner).sendNativeBatch([], []),
      ).to.be.revertedWith('Recipients array cannot be empty');
    });

    it('should revert if the recipients and amounts arrays have different lengths', async () => {
      const { batchSend, owner } = await loadFixture(deployBatchSend);
      await expect(
        batchSend.connect(owner).sendNativeBatch([owner.address], [100, 200]),
      ).to.be.revertedWith('Recipients and amounts must have the same length');
    });

    it('should revert if the balance is insufficient even with fee exemption', async () => {
      const { batchSend, owner, otherAccount } =
        await loadFixture(deployBatchSend);

      const role = await batchSend.FEE_EXEMPT_ROLE();

      await batchSend.connect(owner).grantRole(role, owner.address);

      await batchSend.connect(owner).setFeeExempt(owner.address, true);

      await expect(
        batchSend
          .connect(owner)
          .sendNativeBatch([otherAccount.address], [parseEther('1.1')]),
      ).to.be.revertedWith('Transfer failed');
    });
  });

  describe('Send ERC20 Batch', () => {
    it('should send ERC20 tokens to multiple recipients with fee', async () => {
      const { batchSend, owner, otherAccount, nextAccount, steakToken } =
        await loadFixture(deployBatchSend);

      await steakToken.connect(owner).mint(owner, parseEther('10000'));

      await steakToken
        .connect(owner)
        .approve(batchSend.getAddress(), parseEther('10000'));

      const recipients = [otherAccount.address, nextAccount.address];

      const initialOwner = await steakToken.balanceOf(owner.address);
      const amounts = [parseEther('100'), parseEther('250')];

      const fee = await batchSend.calculateFee(amounts[0] + amounts[1]);

      await batchSend
        .connect(owner)
        .sendERC20Batch(steakToken.getAddress(), recipients, amounts);

      expect(await steakToken.balanceOf(owner.address)).to.equal(
        initialOwner - amounts[0] - amounts[1] - fee,
      );
      expect(await steakToken.balanceOf(otherAccount.address)).to.equal(
        amounts[0],
      );
      expect(await steakToken.balanceOf(nextAccount.address)).to.equal(
        amounts[1],
      );
      expect(await steakToken.balanceOf(batchSend.getAddress())).to.equal(fee);
    });

    it('should send ERC20 tokens to multiple recipients with fee exemption', async () => {
      const { batchSend, owner, otherAccount, nextAccount, steakToken } =
        await loadFixture(deployBatchSend);

      await batchSend.connect(owner).setFeeExempt(owner.address, true);

      await steakToken.connect(owner).mint(owner, parseEther('100'));

      await steakToken
        .connect(owner)
        .approve(batchSend.getAddress(), parseEther('1000'));

      const recipients = [otherAccount.address, nextAccount.address];

      const initialOwner = await steakToken.balanceOf(owner.address);
      const amounts = [parseEther('0.1'), parseEther('0.2')];

      await batchSend
        .connect(owner)
        .sendERC20Batch(steakToken.getAddress(), recipients, amounts);

      expect(await steakToken.balanceOf(owner.address)).to.equal(
        initialOwner - amounts[0] - amounts[1],
      );
      expect(await steakToken.balanceOf(otherAccount.address)).to.equal(
        amounts[0],
      );
      expect(await steakToken.balanceOf(nextAccount.address)).to.equal(
        amounts[1],
      );
      expect(await steakToken.balanceOf(batchSend.getAddress())).to.equal(0);
    });

    it('should send ERC20 tokens without fee when fee is 0', async () => {
      const { batchSend, owner, otherAccount, nextAccount, steakToken } =
        await loadFixture(deployBatchSend);

      await batchSend.connect(owner).setFee(0);

      await steakToken.connect(owner).mint(owner, parseEther('100'));

      await steakToken
        .connect(owner)
        .approve(batchSend.getAddress(), parseEther('1000'));

      const recipients = [otherAccount.address, nextAccount.address];

      const initialOwner = await steakToken.balanceOf(owner.address);
      const amounts = [parseEther('0.1'), parseEther('0.2')];

      await batchSend
        .connect(owner)
        .sendERC20Batch(steakToken.getAddress(), recipients, amounts);

      expect(await steakToken.balanceOf(owner.address)).to.equal(
        initialOwner - amounts[0] - amounts[1],
      );
      expect(await steakToken.balanceOf(batchSend.getAddress())).to.equal(0);
    });

    it('should emit a ERC20BatchSent event', async () => {
      const { batchSend, owner, otherAccount, nextAccount, steakToken } =
        await loadFixture(deployBatchSend);

      await batchSend.connect(owner).setFeeExempt(owner.address, true);

      await steakToken.connect(owner).mint(owner, parseEther('100'));

      await steakToken
        .connect(owner)
        .approve(batchSend.getAddress(), parseEther('1000'));

      const recipients = [otherAccount.address, nextAccount.address];
      const amounts = [parseEther('0.1'), parseEther('0.2')];

      await expect(
        batchSend
          .connect(owner)
          .sendERC20Batch(steakToken.getAddress(), recipients, amounts),
      ).to.emit(batchSend, 'ERC20BatchSent');
    });

    it('should revert if the fee is not paid', async () => {
      const { batchSend, owner, otherAccount, nextAccount, steakToken } =
        await loadFixture(deployBatchSend);

      const recipients = [otherAccount.address, nextAccount.address];
      const amounts = [parseEther('0.1'), parseEther('0.2')];

      await expect(
        batchSend
          .connect(owner)
          .sendERC20Batch(steakToken.getAddress(), recipients, amounts),
      ).to.be.revertedWith('Insufficient funds for fee');
    });

    it('should revert if the recipients array is empty', async () => {
      const { batchSend, owner, steakToken } =
        await loadFixture(deployBatchSend);
      await expect(
        batchSend
          .connect(owner)
          .sendERC20Batch(steakToken.getAddress(), [], []),
      ).to.be.revertedWith('Recipients array cannot be empty');
    });

    it('should revert if the recipients and amounts arrays have different lengths', async () => {
      const { batchSend, owner, steakToken } =
        await loadFixture(deployBatchSend);
      await expect(
        batchSend
          .connect(owner)
          .sendERC20Batch(steakToken.getAddress(), [owner.address], [100, 200]),
      ).to.be.revertedWith('Recipients and amounts must have the same length');
    });

    it('should revert if the balance is insufficient even with fee exemption', async () => {
      const { batchSend, owner, otherAccount, steakToken } =
        await loadFixture(deployBatchSend);

      const role = await batchSend.FEE_EXEMPT_ROLE();

      await steakToken
        .connect(owner)
        .approve(batchSend.getAddress(), parseEther('1000'));

      await batchSend.connect(owner).grantRole(role, owner.address);

      await batchSend.connect(owner).setFeeExempt(owner.address, true);

      await expect(
        batchSend
          .connect(owner)
          .sendERC20Batch(
            steakToken.getAddress(),
            [otherAccount.address],
            [parseEther('110')],
          ),
      )
        .to.be.revertedWithCustomError(steakToken, 'ERC20InsufficientBalance')
        .withArgs(owner.address, 0, parseEther('110'));
    });
  });

  // Calculate Fee

  describe('Calculate Fee', () => {
    it('should calculate the fee correctly for 100', async () => {
      const { batchSend } = await loadFixture(deployBatchSend);

      const fee = await batchSend.calculateFee(parseEther('100'));

      expect(fee).to.equal(parseEther('2.5'));
    });

    it('should calculate the fee correctly for 1000', async () => {
      const { batchSend } = await loadFixture(deployBatchSend);

      const fee = await batchSend.calculateFee(parseEther('1000'));
      expect(fee).to.equal(parseEther('25'));
    });

    it('should calculate the fee correctly for 1', async () => {
      const { batchSend } = await loadFixture(deployBatchSend);

      const fee = await batchSend.calculateFee(parseEther('1'));

      expect(fee).to.equal(parseEther('0.025'));
    });

    it('should handle 0', async () => {
      const { batchSend } = await loadFixture(deployBatchSend);

      const fee = await batchSend.calculateFee(parseEther('0'));

      expect(fee).to.equal(parseEther('0'));
    });
  });

  // Fee Exempt Status

  describe('Fee Exempt', () => {
    it('should set the fee exempt status for an address correctly', async () => {
      const { batchSend, owner } = await loadFixture(deployBatchSend);

      await batchSend.connect(owner).setFeeExempt(owner.address, true);

      const isFeeExempt = await batchSend.isFeeExempt(owner.address);

      expect(isFeeExempt).to.be.true;
    });

    it('should revert if the fee exempt role is not the caller', async () => {
      const { batchSend, otherAccount } = await loadFixture(deployBatchSend);

      await expect(
        batchSend
          .connect(otherAccount)
          .setFeeExempt(otherAccount.address, true),
      )
        .to.be.revertedWithCustomError(
          batchSend,
          'AccessControlUnauthorizedAccount',
        )
        .withArgs(otherAccount.address, await batchSend.FEE_EXEMPT_ROLE());
    });

    it('should emit a FeeExemptSet event', async () => {
      const { batchSend, owner } = await loadFixture(deployBatchSend);

      await expect(batchSend.connect(owner).setFeeExempt(owner.address, true))
        .to.emit(batchSend, 'FeeExemptSet')
        .withArgs(owner.address, true);
    });
  });

  describe('Batch Set Fee Exempt', () => {
    it('should batch set the fee exempt status for multiple addresses correctly', async () => {
      const { batchSend, owner, otherAccount, nextAccount } =
        await loadFixture(deployBatchSend);

      const addresses = [
        owner.address,
        otherAccount.address,
        nextAccount.address,
      ];
      const isExempt = [true, false, true];

      await batchSend.connect(owner).batchSetFeeExempt(addresses, isExempt);

      for (let i = 0; i < addresses.length; i++) {
        expect(await batchSend.isFeeExempt(addresses[i])).to.equal(isExempt[i]);
      }
    });

    it('should revert if the addresses and exemptions arrays have different lengths', async () => {
      const { batchSend, owner } = await loadFixture(deployBatchSend);
      await expect(
        batchSend
          .connect(owner)
          .batchSetFeeExempt([owner.address], [true, false]),
      ).to.be.revertedWith(
        'Addresses and exemptions must have the same length',
      );
    });

    it('should revert if the fee exempt role is not the caller', async () => {
      const { batchSend, otherAccount } = await loadFixture(deployBatchSend);

      await expect(batchSend.connect(otherAccount).batchSetFeeExempt([], []))
        .to.be.revertedWithCustomError(
          batchSend,
          'AccessControlUnauthorizedAccount',
        )
        .withArgs(otherAccount.address, await batchSend.FEE_EXEMPT_ROLE());
    });

    it('should emit a BatchFeeExemptSet event', async () => {
      const { batchSend, owner, otherAccount } =
        await loadFixture(deployBatchSend);

      const addresses = [owner.address, otherAccount.address];
      const isExempt = [true, true];

      await expect(
        batchSend.connect(owner).batchSetFeeExempt(addresses, isExempt),
      ).to.emit(batchSend, 'BatchFeeExemptSet');
    });
  });

  // Admin Fee Management

  describe('Set Fee Per Thousand', () => {
    it('should set the fee per thousand correctly', async () => {
      const { batchSend, owner } = await loadFixture(deployBatchSend);

      await batchSend.connect(owner).setFee(12345);

      const fee = await batchSend.fee();

      expect(fee).to.equal(12345);
    });

    it('should revert if the admin is not the caller', async () => {
      const { batchSend, otherAccount } = await loadFixture(deployBatchSend);

      await expect(batchSend.connect(otherAccount).setFee(12345))
        .to.be.revertedWithCustomError(
          batchSend,
          'AccessControlUnauthorizedAccount',
        )
        .withArgs(otherAccount.address, await batchSend.DEFAULT_ADMIN_ROLE());
    });

    it('should emit a FeeSet event', async () => {
      const { batchSend, owner } = await loadFixture(deployBatchSend);

      await expect(batchSend.connect(owner).setFee(12345))
        .to.emit(batchSend, 'FeeSet')
        .withArgs(12345);
    });
  });

  describe('Withdraw Native Fees', () => {
    it('should withdraw native fees correctly', async () => {
      const { batchSend, owner, otherAccount, nextAccount } =
        await loadFixture(deployBatchSend);

      const fee = await batchSend.calculateFee(parseEther('0.1'));
      const amount = parseEther('0.1');

      const feeRecipientBalance = await hre.ethers.provider.getBalance(
        otherAccount.address,
      );

      expect(feeRecipientBalance).to.equal(parseEther('10000'));

      await batchSend
        .connect(owner)
        .sendNativeBatch([nextAccount.address], [amount], {
          value: amount + fee,
        });

      expect(
        await hre.ethers.provider.getBalance(batchSend.getAddress()),
      ).to.equal(fee);

      await expect(
        batchSend.connect(owner).withdrawNativeFees(otherAccount.address),
      )
        .to.emit(batchSend, 'NativeFeesWithdrawn')
        .withArgs(otherAccount.address, fee);

      expect(
        await hre.ethers.provider.getBalance(otherAccount.address),
      ).to.equal(feeRecipientBalance + fee);

      expect(
        await hre.ethers.provider.getBalance(batchSend.getAddress()),
      ).to.equal(0);
    });
  });

  describe('Withdraw ERC20 Fees', () => {
    it('should withdraw ERC20 fees correctly', async () => {
      const { batchSend, owner, otherAccount, nextAccount, steakToken } =
        await loadFixture(deployBatchSend);

      const fee = await batchSend.calculateFee(parseEther('100'));
      const amount = parseEther('100');

      await steakToken.connect(owner).mint(owner, parseEther('10000'));

      await steakToken
        .connect(owner)
        .approve(batchSend.getAddress(), parseEther('100000'));

      await batchSend
        .connect(owner)
        .sendERC20Batch(
          steakToken.getAddress(),
          [nextAccount.address],
          [amount],
        );

      expect(await steakToken.balanceOf(batchSend.getAddress())).to.equal(fee);

      expect(await steakToken.balanceOf(otherAccount.address)).to.equal(0);

      await expect(
        batchSend
          .connect(owner)
          .withdrawERC20Fees(steakToken.getAddress(), otherAccount.address),
      )
        .to.emit(batchSend, 'ERC20FeesWithdrawn')
        .withArgs(steakToken.getAddress(), otherAccount.address, fee);

      expect(await steakToken.balanceOf(otherAccount.address)).to.equal(fee);

      expect(await steakToken.balanceOf(batchSend.getAddress())).to.equal(0);
    });
  });
});
