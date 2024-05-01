const medianOfArrays = ((arr1, arr2) => {
    const findMedian = function(arr) {
        const length = arr.length;
        const centerValue = Math.floor(length / 2);
        if (length % 2 === 0) {
            return (arr[centerValue - 1] + arr[centerValue]) / 2;
        } else {
            return arr[centerValue];
        }
    };
    
    const mergedArray = [...arr1, ...arr2];
    const sortedArray = mergedArray.sort((a, b) => a - b);
    
    return findMedian(sortedArray);
})([1, 3, 5], [2, 4, 6]);

console.log(medianOfArrays); // Output: 3.5
