let numbers = [1,1,1,2,3,2,4,9,8,4,5];

let remdup = function(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
};

console.log(remdup(numbers)); // Output: [ 1, 2, 3, 4, 9, 8, 5]

   

