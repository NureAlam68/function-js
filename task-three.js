// Task-3

// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.


function make_avg(number, size) {
    let sum = 0;
    for(let num of number) {
        sum = sum + num;
    }
    let avg = sum / size;
    return avg;
}
let number = [10, 20, 30, 40, 50];
let size = number.length;
let avg = make_avg(number, size);
console.log(number, size);
console.log('average of those values:', avg);