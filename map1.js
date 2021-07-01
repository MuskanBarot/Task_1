module.exports = function arrayMap(arr, fn) {
    // SOLUTION GOES HERE
    return arr.reduce(function(acc, item, index, arr) {
        acc.push(fn.call( item, index, arr))
        return acc
      }, [])
  }