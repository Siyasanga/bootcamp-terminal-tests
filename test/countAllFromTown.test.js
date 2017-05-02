const countAllFromTown = require("../countAllFromTown");
const assert = require("assert");
describe("countAllPaarl()",function() {
  it("Should return 3 since there are 3 registrations with CL",function() {
    assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'),3);
  });
  it("Should return 0 since there are 0 registrations with CA",function() {
    assert.equal(countAllFromTown('CL 124,CY 567,CL 345,CJ 456,CL 341','CA'),0);
  });
});
