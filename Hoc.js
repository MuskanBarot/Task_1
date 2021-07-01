function repeat(operation, num) {
    // SOLUTION GOES HERE
    for(var i = 0; i < num; i++){
        operation(i);
      }
  }

  // Do not remove the line below
  module.exports = repeat
