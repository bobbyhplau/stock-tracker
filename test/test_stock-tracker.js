var assert = require("chai").assert;
var maxProfit = require("../lib/stock-tracker.js").maxProfit;
var treeMax = require("../lib/stock-tracker.js").treeMax;

describe("Max Profit", function() {
  it("should return 16 for this list of stocks", function() {
    var stocks = [45, 24, 35, 31, 40, 38, 11];

    assert.equal(maxProfit(stocks), 16);
  });

  it("should return -1 if there is no profit to be made", function() {
    var stocks = [65, 63, 61, 59, 42, 30];

    assert.equal(maxProfit(stocks), -1);
  });

  it("should return 59 even if we do weird things to it", function() {
    var stocks = [45, 24, 35, 31, 11, 40, 38, 70];

    assert.equal(maxProfit(stocks), 59);
  });

  it("should return -1 if we give it an empty array", function() {
    var stocks = [];

    assert.equal(maxProfit(stocks), -1);
  });

  it("should return the correct profit even if we give it a weird array", function() {

    var stocks = [23, 11, 20, 50];

    assert.equal(maxProfit(stocks), 39);
  });

  it("should return the correct profit even if we give it a weird array", function() {

    var stocks = [23, 11, 20, 16, 50];

    assert.equal(maxProfit(stocks), 39);
  });
});

describe("Profit Tree", function() {
  it("should return 11 and the min of object A and the max of object B", function() {

    var objA = {profit: -1, min: 24, max: 45};
    var objB = {profit: -1, min: 31, max: 35};

    var objC = {profit: 11, min: 24, max: 35};

    assert.deepEqual(treeMax(objA, objB), objC);
  });

  it("should return 59 and the min of object B and the max of obect B", function() {

    var objA = {profit: 29, min: 11, max: 40};
    var objB = {profit: 32, min: 38, max: 70};

    var objC = {profit: 59, min: 11, max: 70};

    assert.deepEqual(treeMax(objA, objB), objC);
  });

  it("should return -1 and the min of both objects and the max of both objects", function() {

    var objA = {profit: -1, min: 44, max: 45};
    var objB = {profit: -1, min: 42, max: 43};

    var objC = {profit: -1, min: 42, max: 45};

    assert.deepEqual(treeMax(objA, objB), objC);
  });
});