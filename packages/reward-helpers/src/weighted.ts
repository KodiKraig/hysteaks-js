/**
 * Distribute an amount weighted among a given number of recipients.
 *
 * @param amount - The amount to distribute.
 * @param weights - The weights of the recipients.
 * @returns An array of amounts distributed weighted among the recipients.
 */
export const weightedAmount = (
  amount: bigint | number,
  weights: (bigint | number)[],
): bigint[] => {
  const totalWeight = weights
    .map((weight) => BigInt(weight))
    .reduce((acc, weight) => acc + weight, 0n);

  const _amount = BigInt(amount);

  return weights.map((weight) => (_amount * BigInt(weight)) / totalWeight);
};
