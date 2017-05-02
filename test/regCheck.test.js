const regCheck = require("../regCheck");
const assert = require("assert");
describe("regCheck()",function(){
  it("Checks in whether registration number end with GP for Gauteng",function() {
    assert.equal(regCheck('DV 23 NB GP', 'GP'), true);
  });
  it("Should Return false since registration number does not end with MP for Mpumalanga",function() {
    assert.equal(regCheck('DV 23 LP GP', 'MP'), false);
  });
});
