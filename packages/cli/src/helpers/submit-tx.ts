import { ethers } from 'ethers';

export default async function submitTx(
  transaction: () => Promise<ethers.ContractTransactionResponse>,
): Promise<ethers.ContractTransactionReceipt> {
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
}
