import 'dotenv/config';
import { Command } from 'commander';
import { ethers } from 'ethers';

const ERC20_BALANCE_OF_ABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const provider = new ethers.JsonRpcProvider(process.env.JSON_RPC_URL);

const program = new Command();

program
  .name('HYSTEAKS CLI')
  .description('CLI tool for interacting with HYSTEAKS contracts');

program
  .command('balance')
  .description('Get native token balance')
  .argument('<address>', 'wallet address')
  .action(async (address) => {
    const balance = await provider.getBalance(address);
    console.log(`Native token balance:\n${ethers.formatEther(balance)}`);
  });

program
  .command('balanceERC20')
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

program.parse();
