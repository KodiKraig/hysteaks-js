import 'dotenv/config';
import { Command } from 'commander';
import { registerBalanceCommand } from './commands/balance';
import { registerBatchSendCommand } from './commands/batch-send';
import { registerSteakTokenCommand } from './commands/steak-token';

const program = new Command();

program
  .name('HYSTEAKS CLI')
  .description('CLI tool for interacting with HYSTEAKS contracts');

registerBalanceCommand(program);

registerBatchSendCommand(program);

registerSteakTokenCommand(program);

program.parse();
