
/**
 * Use any language you want to answer the following questions.
 * Please note, we consider elegant design and clean coding style 
 * equally as important as a correct solution.
 */

/** 
 * STRING MANIPULATION - Justifying text
 * Suppose you are programming for a really old-school internet newspaper, 
 * one that is so old-school that they only have monospace fonts. 
 * However, the editor really wants to see the monospace text justified 
 * to fit into the column space he has at a particular time. Your job 
 * is to write a program that will take as input the width of the column 
 * in characters and the entire text to be formatted, and return the same 
 * text except justified to fit into the column.
 */

/**
 * Solution written in JS
 */
var justifyText = function justify () {

  var buildArray = [];
  var lengthStart = 0;
  var lengthStop = arguments[0];
  // divide and plus one iteration for remainder
  var iterations = parseInt(arguments[1].length / arguments[0]) + 1;

  for (var i=0; i<iterations; i++) {
    buildArray.push(arguments[1].substring(lengthStart,lengthStop));
    lengthStart = lengthStop;
    lengthStop = lengthStop + arguments[0];

    console.log(buildArray[i]);
  }
};

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/** 
 * STRING MANIPULATION - Compacting a string
 * Write a function to compact a string in place: 
 * A. strip whitespace from the string.
 * B. remove duplicate characters if they are 
 * next to each other
 *
 * For example, consider the following input:
 * ----------------
 * abb cddpddef gh
 * ----------------
 *
 * Then the output of your program should be:
 * ----------------
 * abcdpdefgh
 * ----------------
 */

/**
 * Solution written in JS
 * Can also just use reduce and
 * checking both cases without filtering
 */
var stringManipulation = function () {
  var result = Array.prototype.filter.call(arguments[0], function (currentChar) {
    return (currentChar !== ' ');
  }).reduce(function(buildArray, currentChar) {

    if (buildArray[buildArray.length-1] !== currentChar) {
      buildArray.push(currentChar)
    }
    return buildArray;
  }, []).join('');

  console.log(result);
};

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/** 
 * STRING MANIPULATION - Spiral printing
 * Write a function to print a 2-D array 
 * (n x m) in spiral order (clockwise).
 *
 * For example, consider the following input:
 * ------
 * 1 2 3 
 * 4 5 6         
 * 7 8 9 
 * ------
 * 
 * Then the output of your program should be:
 * ------------------
 * 1 2 3 6 9 8 7 4 5
 * ------------------
 */

/**
 * Solution written in JS
 */
var spiralPrinting = function spiral (matrix) {

  // top row of matrix
  for (var i=0; i<matrix[0].length; i++) {
    console.log(matrix[0][i]);
  }

  matrix.splice(0, 1); // remove from matrix
  // bottomed out - array is empty
  if (matrix.length === 0) {
    console.log('spiral done');
    return;
  }

   // right column of matrix
  for (var i=0; i<matrix.length; i++) {
    console.log(matrix[i][matrix[i].length-1]);
    matrix[i].splice(matrix[i].length-1, 1);
  }

  // bottom row of matrix
  for (var i=matrix[matrix.length-1].length-1; i>=0; i--) {
    console.log(matrix[matrix.length-1][i]);
  }

  matrix.splice(matrix.length-1, 1); // remove from matrix
  // bottomed out - array is empty
  if (matrix.length === 0) {
    console.log('spiral done');
    return;
  }

  // left column of matrix
  for (var i=matrix.length-1; i>=0; i--) {
    console.log(matrix[i][0]);
    matrix[i].splice(0, 1);
  }

  // repeat the process
  spiral(matrix);
}

console.log('----------- QUESTION #2 -----------');
justifyText(20, 'The quick brown fox jumps over the lazy dog.');
console.log('-----------------------------------');

console.log('----------- QUESTION #4 -----------');
stringManipulation('abb cddpddef gh');
console.log('-----------------------------------');

console.log('----------- QUESTION #5 -----------');
console.log('------- PRINTING 3X3 MATRIX -------');
spiralPrinting([[1,2,3], [4,5,6], [7,8,9]]);
console.log('-----------------------------------');
console.log('------- PRINTING 4X4 MATRIX -------');
spiralPrinting([[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]]);
console.log('-----------------------------------');
console.log('------- PRINTING 4X3 MATRIX -------');
spiralPrinting([[1,2,3,4], [5,6,7,8], [9,10,11,12]]);
console.log('-----------------------------------');
