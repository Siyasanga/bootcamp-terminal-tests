const isWeekDay = require("../isWeekday");
const assert = require("assert");
describe("isWeekDay()", function(){
  it("Return true for Thursday as it is a weekday.", function(){
    assert.equal(isWeekDay('Thursday'), true);
  });
  it("Return false for Sunday since its not a weekday", function(){
    assert.equal(isWeekDay("Sunday"), false);
  });
});
