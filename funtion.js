const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumOfTripledEvens(numbers){
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
      const tripledEvenNumber = numbers[i] * 3;
      console.log(tripledEvenNumber)
      sum += tripledEvenNumber;
    }
  }
  console.log(sum)
  return sum
}sumOfTripledEvens(numbers)

            // Array.map 
   // map returns a new array and does not change the original array.

function addOne(num){
  return num +1;
}

const arr = [1,2,3,4,5];
const mappedArr = arr.map(addOne);
console.log(mappedArr);


// A shorter version goes like this where addOne funstion is inside map method...

const mappedArray = arr.map((num)=> num + 1)
console.log(mappedArray)

            //Array.filter
 // It returns a new array where each item is only included if the callback function returns true for it.

 function isOdd(num){
  return num % 2 !== 0;
 }
 const oddNums = arr.filter(isOdd);
 console.log(oddNums)


            //Array.reduce

const productOfAllNums = arr.reduce((total, currentItem) => {
  return total * currentItem;
}, 1);
console.log(productOfAllNums);

// It goes through every element in arr and apply the callback function to it. It updates total without actually changing the array itself. After it's done, it returns total.
