let sum = [5,7,9,11];
let add = function () {
    let sum = sum.reduce(function(x,y){
        return x+y;
    });
    console.log(sum);
}
add()