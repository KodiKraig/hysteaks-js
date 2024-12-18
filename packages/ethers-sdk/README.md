# @hysteaks-js/ethers-sdk

Auto generated TypeChain ethers.js v6 SDK for interacting with deployed contracts.

## Example Usage

### Batch Send - Native

```ts
import { HysteaksBatchSend__factory } from '@hysteaks-js/ethers-sdk';

const provider = new ethers.JsonRpcProvider('<HYCHAIN_RPC_URL>');

const batchSendContract = HysteaksBatchSend__factory.connect(
  '<BATCH_SEND_CONTRACT_ADDRESS>',
  provider,
);

const owner = new ethers.Wallet('<OWNER_PRIVATE_KEY>', provider);

const recipients = ['<RECIPIENT_1_ADDRESS>', '<RECIPIENT_2_ADDRESS>'];
const amounts = [ethers.parseEther('100'), ethers.parseEther('200')];

// The total amount is the sum of all the amounts to send plus the fee if the owner is not fee exempt

const totalAmount = amounts.reduce((a, b) => a + b, 0n);

const isFeeExempt = await batchSendContract.isFeeExempt(owner.address);

if (!isFeeExempt) {
  const fee = await batchSendContract.calculateFee(totalAmount);
  totalAmount += fee;
}

// Submit the transaction

batchSendContract.connect(owner).sendNativeBatch(recipients, amounts, {
  value: totalAmount,
});
```

### Batch Send - ERC20

```ts
import { HysteaksBatchSend__factory } from '@hysteaks-js/ethers-sdk';

const provider = new ethers.JsonRpcProvider('<HYCHAIN_RPC_URL>');

const batchSendContract = HysteaksBatchSend__factory.connect(
  '<BATCH_SEND_CONTRACT_ADDRESS>',
  provider,
);

const owner = new ethers.Wallet('<OWNER_PRIVATE_KEY>', provider);

// The token address is the address of the ERC20 token to send

const tokenAddress = '<TOKEN_ADDRESS>';

// NOTE: The owner must approve the batch send contract to spend the tokens on their behalf

// ... code to approve the batch send contract to spend the tokens on behalf of the owner ...

const recipients = ['<RECIPIENT_1_ADDRESS>', '<RECIPIENT_2_ADDRESS>'];
const amounts = [ethers.parseEther('100'), ethers.parseEther('200')];

// The total amount is the sum of all the amounts to send plus the fee if the owner is not fee exempt

const totalAmount = amounts.reduce((a, b) => a + b, 0n);

const isFeeExempt = await batchSendContract.isFeeExempt(owner.address);

if (!isFeeExempt) {
  const fee = await batchSendContract.calculateFee(totalAmount);
  totalAmount += fee;
}

// Submit the transaction

batchSendContract.connect(owner).sendERC20Batch(tokenAddress, recipients, amounts);
```
