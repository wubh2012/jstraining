var add  = require('./add')
var expect = require('chai').expect

describe('加法函数的测试', function(){
  it('1+1应该等于2', function(){
    expect(add(1, 1)).to.be.equal(2)
  })
  it('1+2应该等于3', function(){
    expect(add(1, 2)).to.be.equal(3)
  })
  it('3+(-3)应该等于0', function(){
    expect(add(3, -3)).to.be.equal(0)
  })
})
