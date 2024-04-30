(function () {
    let add = [5,6,7].reduce(addition,10);
    function addition(x,y){
        return x + y;
    }
    console.log(add);
})();