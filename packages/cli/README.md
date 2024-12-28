# @hysteaks-js/cli

HYSTEAKS CLI tool for interacting with deployed contracts from the command line.

## Example Commands

## Getting Started

In order to use the CLI, you need to have a `.env` file in the root of the project with the variables from the `.env.example` file.

Copy the `.env.example` file to `.env` and fill in the values.

### Batch Send - Native

```bash
npx ts-node src/index.ts batchSend sendNativeBatch <key> <recipients> <amounts>
```

### Batch Send - ERC20

```bash
npx ts-node src/index.ts batchSend sendERC20Batch <key> <token> <recipients> <amounts>
```
