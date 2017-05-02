const greet = require("../greet.js");
const assert = require("assert");
describe( 'greet()', function(){
  it('greet john correctly', function(){
    assert.equal(greet('john'), 'Goodmorning john');
  });
  it('greet Siya correctly', function(){
    assert.equal(greet('Siya'), 'Goodmorning Siya');
  });
});
