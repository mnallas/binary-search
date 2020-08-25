// initialize fn
// takes 2 arguments: the array and the element you are looking for
const binarySearch = (numbersArray, searchElement) => {
  let currentElement;
  let currentIndex;

  // assigning index for the end of the array
  let maxIndex = numbersArray.length - 1;
  // assigning index for the beginning of the array
  let minIndex = 0;

  // this will keep looping as long as minIndex is less than or equal maxIndex
  while (minIndex <= maxIndex) {
    // rounding down the quotient of the sum of minIndex and maxIndex
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    // assigning currentElement element by index of numbersArray
    currentElement = numbersArray[currentIndex];

    // if searchElement is less than currentElement then run this operation
    if (currentElement < searchElement) {
      minIndex = currentIndex + 1;
      // if searchElement is greater than currentElement, then run this operation
    } else if (currentElement < searchElement) {
      maxIndex = currentIndex - 1;
      // if neither greater than or equal, then you found your element (by index)
    } else {
      return currentIndex;
    }
  }
};

//sample test
const result = binarySearch([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5);

console.log(result);
