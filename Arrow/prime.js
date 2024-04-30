let numbers = [4,5,9,13,16,17,19,21,23,27,29];

let primes = arr => {
    let isPrime = num => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    return arr.filter(num => isPrime(num));
};

console.log(primes(numbers)); // Output: [ 5, 13, 17, 19, 23, 29 ]
