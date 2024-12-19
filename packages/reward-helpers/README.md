# Reward Helpers

This package contains helper functions for calculating reward distributions off chain.

## Installation

```bash
npm install @hysteaks-js/reward-helpers
```

## Usage

```typescript
import { even } from '@hysteaks-js/reward-helpers';

const amount = 100n;
const recipientCount = 5;
const result = even(amount, recipientCount);

console.log(result);
// [20n, 20n, 20n, 20n, 20n]
```

```typescript
import { weightedAmount } from '@hysteaks-js/reward-helpers';

const amount = 100n;
const weights = [1n, 2n, 3n, 4n];
const result = weightedAmount(amount, weights);
console.log(result);
// [10n, 20n, 30n, 40n]
```
