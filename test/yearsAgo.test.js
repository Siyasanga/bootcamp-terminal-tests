const yearsAgo = require("../yearsAgo");
const assert = require("assert");
describe("yearsAgo()",function(){
  it("calculates how many years ago is the year 2000, from 2017",function(){
    assert.equal(yearsAgo(2000),17);
  });
  it("Should return 0 when year is 2017",function(){
    assert.equal(yearsAgo(2017),0);
  });
});
