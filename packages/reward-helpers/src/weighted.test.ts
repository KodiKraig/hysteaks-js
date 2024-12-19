import { expect } from 'chai';
import { weightedAmount } from './weighted';

describe('weighted', () => {
  describe('weightedTotalAmount', () => {
    it('should distribute the bigint amount weighted among the recipients with no remainder', () => {
      const totalAmount = 100n;
      const weights = [1n, 2n, 3n, 4n];

      const result = weightedAmount(totalAmount, weights);

      expect(result).to.deep.equal([10n, 20n, 30n, 40n]);

      const distributedAmount = result.reduce(
        (acc, weight) => acc + weight,
        0n,
      );
      expect(distributedAmount).to.equal(totalAmount);
    });

    it('should distribute the number amount weighted among the recipients with a remainder', () => {
      const totalAmount = 101;
      const weights = [1n, 2n, 3n, 4n];

      const result = weightedAmount(totalAmount, weights);

      expect(result).to.deep.equal([10n, 20n, 30n, 40n]);

      const distributedAmount = result.reduce(
        (acc, weight) => acc + weight,
        0n,
      );
      expect(distributedAmount).to.equal(BigInt(100n));
    });

    it('should distribute the large number amount weighted among the recipients with a remainder', () => {
      const totalAmount = 101312321320n;
      const weights = [1n, 2n, 3n, 4n];

      const result = weightedAmount(totalAmount, weights);

      expect(result).to.deep.equal([
        10131232132n,
        20262464264n,
        30393696396n,
        40524928528n,
      ]);

      const distributedAmount = result.reduce(
        (acc, weight) => acc + weight,
        0n,
      );
      expect(distributedAmount).to.equal(totalAmount);
    });
  });
});
