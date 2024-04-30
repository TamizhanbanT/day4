let numbers = [4,5,6,10,13,15,16];

((arr) => {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
})(numbers); // Output:5,13,15