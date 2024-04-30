let words = ["malayalam", "level", "racecar", "world", "madam", "tamizh"];

let palindromes = arr => {
    const isPalindrome = str => str === str.split("").reverse().join("");
    return arr.filter(word => isPalindrome(word));
};

console.log(palindromes(words)); // Output: ["malayalam", "level", "racecar", "madam"]

