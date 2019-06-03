var maxProfit = function(arr) {

  if (arr.length === 0) {
    return -1;
  }

  return treeRun(arr).profit;
}

var treeRun= function(arr) {

  arr2 = arr.splice(0, arr.length /2);

  return treeTravel(arr2, arr);
}

var treeTravel= function(arr, arr2) {

  if (arr.length === 1 && arr2.length === 1) {

    return treeMax(initObj(arr[0]), initObj(arr2[0]));

  } else {

    if (arr.length === 1) {

      return treeMax(initObj(arr[0]), treeRun(arr2));
    } else {

      if (arr2.length === 1) {

        return treeMax(treeRun(arr), initObj(arr2[0]));
      } else {

        return treeMax(treeRun(arr), treeRun(arr2));
      }
    }
  }
}

var treeMax = function(objA, objB) {

  var crossProfit = objB.max - objA.min;

  if (crossProfit <= 0) {

    crossProfit = -1;
  }

  var newObj = {};

  if (crossProfit > objB.profit && crossProfit > objA.profit) {

    newObj.profit = crossProfit;
    newObj.min = objA.min;
    newObj.max = objB.max;

    return newObj;
  } else {

    if (objB.profit > objA.profit) {
      return objB;
    } else {

      if (objB.profit < objA.profit) {
        return objA;
      } else {

        newObj.profit = -1

        if (objA.min < objB.min) {
          newObj.min = objA.min;
        } else {
          newObj.min = objB.min;
        }

        if (objA.max > objB.max) {
          newObj.max = objA.max;
        } else {
          newObj.max = objB.max;
        }

        return newObj;
      }
    }
  }

return 0;


}

var initObj = function (num) {

  return newObj = {profit: -1, min: num, max: num};
}

module.exports.maxProfit = maxProfit;
module.exports.treeMax = treeMax;

// Object.profit
// Object.min
// Object.max

// ObjA happens before ObjB