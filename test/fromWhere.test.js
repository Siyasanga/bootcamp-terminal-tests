const fromWhere = require("../fromWhere");
const assert = require("assert");
describe("fromWhere()",function(){
  it("Return that CJ 523519 is a registration number from Paarl.",function(){
    assert.equal(fromWhere('CJ 523519'), 'Paarl');
  });
  it("Return that CA 812328 is a registration number from Cape Town.",function() {
    assert.equal(fromWhere('CA 812328'), 'Cape Town');
  });
  it("Return that CC 523519 is a registration number from some other place.",function() {
    assert.equal(fromWhere('CC 523519'), 'Some other place!');
  })
}); 
