/**
 * Distribute an amount evenly among a given number of recipients.
 *
 * @param amount - The amount to distribute.
 * @param recipientCount - The number of recipients to distribute the amount to.
 * @returns An array of amounts distributed evenly among the recipients.
 */
export function even(
  amount: bigint | number,
  recipientCount: number,
): bigint[] {
  return Array.from(
    { length: recipientCount },
    () => BigInt(amount) / BigInt(recipientCount),
  );
}
