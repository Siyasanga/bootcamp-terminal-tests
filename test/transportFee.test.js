const transportFee = require("../transportFee");
const assert = require("assert");
describe("transportFee()",function(){
  it("Return R20 when morning is passed.",function(){
    assert.equal(transportFee('morning'),'R20');
  });
  it("Return R10 when afternoon is passed.",function(){
    assert.equal(transportFee('afternoon'),'R10');
  });
  it("Return 'R0 Transport provided for.' for any other string passed.",function(){
    assert.equal(transportFee('R0 Transport provided for.'),'R0 Transport provided for.');
  });
});
