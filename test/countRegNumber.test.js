const countRegNumber = require("../countRegNumber");
const assert = require("assert");
describe("countRegNumber()",function() {
  it("Counts the number of registration numbers in a string.",function() {
    assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
  });
  it("Counts the number of registration numbers in an empty string.",function() {
    assert.equal(countRegNumber(""), 1);
  });
});
