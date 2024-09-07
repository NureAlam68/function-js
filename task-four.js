// Task-4

// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(binaryStr) {
    sum = 0;
    for(let num of binaryStr) {
        if(num === '0') {
            sum++;  
        }
    }
    return sum;
}
let binaryStr = '100000001'
let result = count_zero(binaryStr);
console.log(result);