import { Command } from 'commander';
import { provider } from '../provider';
import { ethers } from 'ethers';
import { ERC20_BALANCE_OF_ABI } from '../abi/ERC20';

export const registerBalanceCommand = (program: Command): Command => {
  const balanceCommand = program
    .command('balance')
    .description('Check token balance for a given address');

  balanceCommand
    .command('native')
    .description('Get native token balance')
    .argument('<address>', 'wallet address')
    .action(async (address) => {
      const balance = await provider.getBalance(address);
      console.log(`Native token balance:\n${ethers.formatEther(balance)}`);
    });

  balanceCommand
    .command('erc20')
    .description('Get ERC20 token balance')
    .argument('<tokenAddress>', 'ERC20 contract address')
    .argument('<address>', 'wallet address')
    .action(async (tokenAddress, address) => {
      const token = new ethers.Contract(
        tokenAddress,
        ERC20_BALANCE_OF_ABI,
        provider,
      );
      const balance = await token.balanceOf(address);
      console.log(`${tokenAddress} balance:\n${ethers.formatEther(balance)}`);
    });

  return program;
};
