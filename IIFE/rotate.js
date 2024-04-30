let numbers = [1, 2, 3, 4, 5];
let k = 2;

let rotatedArray = ((arr, k) => {
    k = k % arr.length;
    return arr.slice(k).concat(arr.slice(0, k));
})(numbers, k);

console.log(rotatedArray); // Output: [3, 4, 5, 1, 2]
