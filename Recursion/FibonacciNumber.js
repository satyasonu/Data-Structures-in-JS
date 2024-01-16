/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if(n == 0){
        return 0;
    }else if(n==1){
        return 1;
    }
    fib(n) = fib(n-1) + fib(n-2);
    return fib(n);
};
