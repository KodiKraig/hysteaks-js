# Reward Helpers

This package contains helper functions for calculating reward distributions off chain.

## Installation

```bash
npm install @hysteaks-js/reward-helpers
```

## Usage

```typescript
import even from '@hysteaks-js/reward-helpers';

const amount = 100n;
const recipientCount = 5;
const result = even(amount, recipientCount);

console.log(result);
// [20n, 20n, 20n, 20n, 20n]
```
