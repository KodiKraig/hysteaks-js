import { even } from './even';
import { expect } from 'chai';

describe('even', () => {
  it('should distribute the amount evenly among the recipients with no remainder', () => {
    const amount = 100n;
    const recipientCount = 5;
    const result = even(amount, recipientCount);
    expect(result).to.deep.equal([20n, 20n, 20n, 20n, 20n]);
  });

  it('should distribute the amount evenly among the recipients with a remainder', () => {
    const amount = 104n;
    const recipientCount = 5;
    const result = even(amount, recipientCount);
    expect(result).to.deep.equal([20n, 20n, 20n, 20n, 20n]);
  });

  it('should distribute with large number', () => {
    const amount = 12345100001235;
    const recipientCount = 5;
    const result = even(amount, recipientCount);
    expect(result).to.deep.equal([
      2469020000247n,
      2469020000247n,
      2469020000247n,
      2469020000247n,
      2469020000247n,
    ]);
  });
});
