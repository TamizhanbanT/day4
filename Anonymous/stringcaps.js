let words = ["tamizh", "raghul"];

let uppercase = function(arr) {
    return arr.map(function(str) {
        return str.toUpperCase();
    });
};

console.log(uppercase(words)); // Output: ["TAMIZH", "RAGHUL"]
