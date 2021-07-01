function reduce(arr, fn, initial) {
    // SOLUTION GOES HERE
    if (!arr.length)
    return initial;

  if (arr.length == 1)
    return fn(initial, arr[0]);

  return reduce(arr.slice(1), fn, fn(initial, arr[0]));
  }

  module.exports = reduce