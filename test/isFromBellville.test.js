const isFromBellville = require("../isFromBellville");
const assert = require("assert");
describe("isFromBellville()",function() {
  it("Return true for registration number CY 523519.",function() {
    assert.equal(isFromBellville('CY 523519'),true);
  });
  it("Return false since CJ 812328 is not a bellville registration.",function() {
    assert.equal(isFromBellville('CJ 812328'),false);
  });
});
