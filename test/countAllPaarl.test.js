const countAllPaarl = require("../countAllPaarl");
const assert = require("assert");
describe("countAllPaarl()",function() {
  it("probes the array to return a list of registrations starting with 'CJ'",function() {
    assert.equal(countAllPaarl('CA 182736,CY 523519,CJ 812328,CJ 111222,EC 812328'),2);
  });
  it("Should return a 0 since none of registrations start with 'CJ'",function() {
    assert.equal(countAllPaarl('CA 182736,CY 523519,CJ 812328,CJ 111222,EC 812328'),2);
  });
});
