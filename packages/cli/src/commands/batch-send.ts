import { Command } from 'commander';
import { HysteaksBatchSend__factory } from '@hysteaks-js/ethers-sdk';
import { provider } from '../provider';
import { ethers } from 'ethers';
import submitTx from '../helpers/submit-tx';

const batchSendContract = HysteaksBatchSend__factory.connect(
  process.env.BATCH_SEND_CONTRACT_ADDRESS!,
  provider,
);

export const registerBatchSendCommand = (program: Command): Command => {
  const batchSendCommand = program
    .command('batchSend')
    .description('Batch send contract interactions');

  registerFeeCommands(batchSendCommand);

  registerSendCommands(batchSendCommand);

  registerEventCommands(batchSendCommand);

  return program;
};

const registerFeeCommands = (program: Command): Command => {
  const feeCommand = program.command('fee').description('Fee related commands');

  feeCommand
    .command('isFeeExempt')
    .description('Check if an address is fee exempt')
    .argument('<address>', 'wallet address')
    .action(async (address) => {
      const isFeeExempt = await batchSendContract.isFeeExempt(address);
      console.log(`Is fee exempt:\n${isFeeExempt}`);
    });

  feeCommand
    .command('setFeeExempt')
    .description('Set the fee exemption status for an address')
    .argument('<key>', 'the private key for the signer')
    .argument('<address>', 'wallet address to set fee exemption status for')
    .argument('<isExempt>', 'true or false')
    .action(async (key, address, isExempt) => {
      const owner = new ethers.Wallet(key, provider);

      await submitTx(() =>
        batchSendContract.connect(owner).setFeeExempt(address, isExempt),
      );
    });

  feeCommand
    .command('getFee')
    .description('Get the current batch send fee for non exempt addresses')
    .action(async () => {
      const fee = await batchSendContract.fee();
      console.log(`Fee percentage:\n${Number(fee) / 10}%`);
    });

  feeCommand
    .command('setFee')
    .description('Set the fee for batch sends for non exempt addresses')
    .argument('<key>', 'the private key for the signer')
    .argument('<fee>', 'the fee to set')
    .action(async (key, fee) => {
      const owner = new ethers.Wallet(key, provider);

      await submitTx(() => batchSendContract.connect(owner).setFee(fee));
    });

  feeCommand
    .command('withdrawNativeFees')
    .description('Withdraw the native fees collected by the contract')
    .argument('<key>', 'the private key for the signer')
    .argument('<to>', 'the address to withdraw the fees to')
    .action(async (key, to) => {
      const owner = new ethers.Wallet(key, provider);
      await submitTx(() =>
        batchSendContract.connect(owner).withdrawNativeFees(to),
      );
    });

  feeCommand
    .command('withdrawERC20Fees')
    .description('Withdraw the ERC20 fees collected by the contract')
    .argument('<key>', 'the private key for the signer')
    .argument('<token>', 'the address of the ERC20 token to withdraw')
    .argument('<to>', 'the address to withdraw the fees to')
    .action(async (key, token, to) => {
      const owner = new ethers.Wallet(key, provider);
      await submitTx(() =>
        batchSendContract.connect(owner).withdrawERC20Fees(token, to),
      );
    });

  return feeCommand;
};

const registerSendCommands = (program: Command): Command => {
  const sendCommand = program
    .command('sendBatch')
    .description('Batch send tokens related commands');

  sendCommand
    .command('native')
    .description('Send a batch of native tokens to multiple addresses')
    .argument('<key>', 'the private key for the signer')
    .argument(
      '<recipients>',
      'comma separated list of addresses to send the token to',
      (value) => value.split(','),
    )
    .argument(
      '<amounts>',
      'comma separated list of amounts of the token to send to each address in ETH',
      (value) => value.split(',').map(ethers.parseEther),
    )
    .action(async (key, recipients: string[], amounts: bigint[]) => {
      if (recipients.length === 0) {
        console.error('ERROR: Recipients array cannot be empty');
        return;
      }

      if (recipients.length !== amounts.length) {
        console.error(
          'ERROR: Recipients and amounts must have the same length',
        );
        return;
      }

      const owner = new ethers.Wallet(key, provider);

      let totalAmount = amounts.reduce((a, b) => a + b, 0n);

      const isFeeExempt = await batchSendContract.isFeeExempt(owner.address);

      if (!isFeeExempt) {
        const fee = await batchSendContract.calculateFee(totalAmount);
        console.log(`Fee: ${fee}`);
        totalAmount += fee;
      }

      await submitTx(() =>
        batchSendContract.connect(owner).sendNativeBatch(recipients, amounts, {
          value: totalAmount,
        }),
      );
    });

  sendCommand
    .command('erc20')
    .description('Send a batch of ERC20 tokens to multiple addresses')
    .argument('<key>', 'the private key for the signer')
    .argument('<token>', 'the address of the ERC20 token to send')
    .argument(
      '<recipients>',
      'comma separated list of addresses to send the token to',
      (value) => value.split(','),
    )
    .argument(
      '<amounts>',
      'comma separated list of amounts of the token to send to each address',
      (value) => value.split(',').map(ethers.parseEther),
    )
    .action(
      async (key, token: string, recipients: string[], amounts: bigint[]) => {
        if (recipients.length === 0) {
          console.error('ERROR: Recipients array cannot be empty');
          return;
        }

        if (recipients.length !== amounts.length) {
          console.error(
            'ERROR: Recipients and amounts must have the same length',
          );
          return;
        }

        const owner = new ethers.Wallet(key, provider);

        let totalAmount = amounts.reduce((a, b) => a + b, 0n);

        const isFeeExempt = await batchSendContract.isFeeExempt(owner.address);

        if (!isFeeExempt) {
          const fee = await batchSendContract.calculateFee(totalAmount);
          console.log(`Fee: ${fee}`);
          totalAmount += fee;
        }

        await submitTx(() =>
          batchSendContract
            .connect(owner)
            .sendERC20Batch(token, recipients, amounts),
        );
      },
    );

  return sendCommand;
};

const registerEventCommands = (program: Command): Command => {
  const eventCommand = program
    .command('events')
    .description('Commands to filter events');

  eventCommand
    .command('nativeBatchSent')
    .description('Send events for native token batch sends')
    .argument('<address>', 'the address to send the events from')
    .action(async (address) => {
      const filter = batchSendContract.filters.NativeBatchSent([address]);

      const events = await batchSendContract.queryFilter(filter);

      console.log(events);
    });

  return eventCommand;
};
