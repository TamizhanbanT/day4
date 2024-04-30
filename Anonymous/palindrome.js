let words = ["malayalam", "level", "racecar", "world", "madam", "tamizh"];

let palindrome = function(arr) {
    const isPalindrome = str => str === str.split("").reverse().join("");
    return arr.filter(word => isPalindrome(word));
};

console.log(palindrome(words)); // Output: ["malayalam", "level", "racecar", "madam"]

