const NumbersValidator = require('../../app/numbers_validator');
const {expect} = require('chai');

describe('isNumberEven positive scenarios', function() {
  let validator;

  beforeEach(function() {
    validator = new NumbersValidator();
  });

  afterEach(function() {
    validator = null;
  });

  it('should return true if number is even', function() {
    expect(validator.isNumberEven(4)).to.be.true;
  });

  it('should return false if number is odd', function() {
    expect(validator.isNumberEven(5)).to.be.false;
  });
});
