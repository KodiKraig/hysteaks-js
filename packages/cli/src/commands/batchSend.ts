import { Command } from 'commander';
import { HysteaksBatchSend__factory } from '@hysteaks-js/ethers-sdk';
import { provider } from '../provider';
import { ethers } from 'ethers';

const batchSendContract = HysteaksBatchSend__factory.connect(
  process.env.BATCH_SEND_CONTRACT_ADDRESS!,
  provider,
);

const submitTx = async (
  transaction: () => Promise<ethers.ContractTransactionResponse>,
): Promise<ethers.ContractTransactionReceipt> => {
  console.log('Submitting transaction...');

  const tx = await transaction();

  console.log(`Transaction sent:\n${tx.hash}`);

  const receipt = await tx.wait();

  if (receipt?.status === 1) {
    console.log('Transaction confirmed!');
  } else {
    console.log('Transaction failed');
  }

  return receipt!;
};

export const registerBatchSendCommand = (program: Command): Command => {
  const batchSendCommand = program
    .command('batchSend')
    .description('Batch send contract interactions');

  batchSendCommand
    .command('fee')
    .description('Get the current batch send fee for non exempt addresses')
    .action(async () => {
      const fee = await batchSendContract.fee();
      console.log(`Fee percentage:\n${Number(fee) / 10}%`);
    });

  batchSendCommand
    .command('isFeeExempt')
    .description('Check if an address is fee exempt')
    .argument('<address>', 'wallet address')
    .action(async (address) => {
      const isFeeExempt = await batchSendContract.isFeeExempt(address);
      console.log(`Is fee exempt:\n${isFeeExempt}`);
    });

  batchSendCommand
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

  batchSendCommand
    .command('setFee')
    .description('Set the fee for batch sends for non exempt addresses')
    .argument('<key>', 'the private key for the signer')
    .argument('<fee>', 'the fee to set')
    .action(async (key, fee) => {
      const owner = new ethers.Wallet(key, provider);

      await submitTx(() => batchSendContract.connect(owner).setFee(fee));
    });

  return program;
};
