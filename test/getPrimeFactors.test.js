var expect = require('chai').expect
var getPrimeFactors = require('../getPrimeFactors')

describe('prime factors', function(){
  it('should be [] for 1',function(){
    expect(getPrimeFactors(1)).to.be.eql([])
  })
})
