import 'dotenv/config';
import { Command } from 'commander';
import { registerBalanceCommand } from './commands/balance';
import { registerBatchSendCommand } from './commands/batchSend';

const program = new Command();

program
  .name('HYSTEAKS CLI')
  .description('CLI tool for interacting with HYSTEAKS contracts');

registerBalanceCommand(program);

registerBatchSendCommand(program);

program.parse();
