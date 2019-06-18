const { expect } = require('chai');

const distribute = require('./first-fit');

const doesFit = (host, items) => {
  const sum = items.reduce((acc, item) => acc + item, 0);
  return sum <= host;
};

describe('first fit distribution', () => {
  it('should not create any group when no items', () => {
    const distribution = distribute(1, [], doesFit);
    expect(distribution).to.deep.equal([]);
  });

  it('should create one group when one fitting item', () => {
    const distribution = distribute(1, [1], doesFit);
    expect(distribution).to.deep.equal([[1]]);
  });

  it('should create one group when two fitting items', () => {
    const distribution = distribute(2, [1, 1], doesFit);
    expect(distribution).to.deep.equal([[1, 1]]);
  });

  it('should create two groups when one item fits one group', () => {
    const distribution = distribute(1, [1, 1], doesFit);
    expect(distribution).to.deep.equal([[1], [1]]);
  });

  it('should create two groups when first two items fit the first group', () => {
    const distribution = distribute(2, [1, 1, 1], doesFit);
    expect(distribution).to.deep.equal([[1, 1], [1]]);
  });
});
