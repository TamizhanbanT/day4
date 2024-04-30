let numbers = [1, 2, 3, 4, 5];
let k = 2;

let rotateArray = function(arr, k) {
    k = k % arr.length; 
    let rotated = arr.slice(k).concat(arr.slice(0, k));
    return rotated;
};

console.log(rotateArray(numbers, k)); // Output: [3, 4, 5, 1, 2]
