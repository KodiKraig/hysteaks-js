import { SteakToken__factory } from '@hysteaks-js/ethers-sdk';
import { provider } from '../provider';
import { Command } from 'commander';
import { ethers } from 'ethers';
import submitTx from '../helpers/submit-tx';

const steakTokenContract = SteakToken__factory.connect(
  process.env.STEAK_TOKEN_CONTRACT_ADDRESS!,
  provider,
);

export const registerSteakTokenCommand = (program: Command): Command => {
  const steakTokenCommand = program
    .command('steakToken')
    .description('STEAK token contract interactions');

  steakTokenCommand
    .command('mint')
    .description('Mint STEAK tokens to an address')
    .argument('<key>', 'the private key for the signer')
    .argument('<to>', 'the address to mint the steak tokens to')
    .argument('<amount>', 'the amount of steak tokens to mint')
    .action(async (key, to, amount) => {
      const owner = new ethers.Wallet(key, provider);
      await submitTx(() =>
        steakTokenContract.connect(owner).mint(to, ethers.parseEther(amount)),
      );
    });

  steakTokenCommand
    .command('balanceOf')
    .description('Get the balance of STEAK tokens for an address')
    .argument('<address>', 'the address to get the balance of')
    .action(async (address) => {
      const balance = await steakTokenContract.balanceOf(address);
      console.log(`Balance:\n${ethers.formatUnits(balance.toString())}`);
    });

  steakTokenCommand
    .command('approve')
    .description(
      'Approve an address to spend STEAK tokens on behalf of the owner',
    )
    .argument('<key>', 'the private key for the signer')
    .argument('<spender>', 'the address to approve')
    .argument('<amount>', 'the amount of STEAK tokens to approve')
    .action(async (key, spender, amount) => {
      const owner = new ethers.Wallet(key, provider);
      await submitTx(() =>
        steakTokenContract
          .connect(owner)
          .approve(spender, ethers.parseEther(amount)),
      );
    });

  return steakTokenCommand;
};
