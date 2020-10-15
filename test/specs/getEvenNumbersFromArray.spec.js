const NumbersValidator = require('../../app/numbers_validator');
const {expect} = require('chai');

describe('getEvenNumbers positive scenarios', function() {
  let validator;

  beforeEach(function() {
    validator = new NumbersValidator();
  });

  afterEach(function() {
    validator = null;
  });

  it('should return array with even numbers', function() {
    expect(validator.getEvenNumbersFromArray([2, 3, 4])).to.be.eql([2, 4]);
  });

  it('should return empty array if no even numbers', function() {
    expect(validator.getEvenNumbersFromArray([3, 7])).to.have.lengthOf(0);
  });
});
