import { Command } from 'commander';
import { HysteaksBatchSend__factory } from '@hysteaks-js/ethers-sdk';
import { provider } from '../provider';
import { ethers } from 'ethers';

const batchSendContract = HysteaksBatchSend__factory.connect(
  process.env.BATCH_SEND_CONTRACT_ADDRESS!,
  provider,
);

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
    .description('Set the fee exempt status for an address')
    .argument('<key>', 'the private key for the signer')
    .argument('<address>', 'wallet address to set fee exempt status for')
    .argument('<isExempt>', 'true or false')
    .action(async (key, address, isExempt) => {
      const owner = new ethers.Wallet(key, provider);

      console.log('Submitting transaction...');

      const tx = await batchSendContract
        .connect(owner)
        .setFeeExempt(address, isExempt);

      console.log(`Transaction sent:\n${tx.hash}`);

      const receipt = await tx.wait();

      console.log('Transaction status', receipt?.status);

      if (receipt?.status === 1) {
        console.log(
          'Transaction confirmed!\n',
          `Exception status:\n`,
          isExempt,
        );
      } else {
        console.log('Transaction failed');
      }
    });

  return program;
};
