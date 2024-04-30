let numbers = [4,5,6,10,13,15,16];

let OddNumbers = arr => {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};

OddNumbers(numbers); // Output: 5,13,15

