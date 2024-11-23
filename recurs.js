function factorial(n){
    if (n <= 1){
        return 1
    } else{
        return n*factorial(n-1)
    }
}

console.log(factorial(5));

function fib(n){
    if (n==0){
        return 0
    }
    if (n==1){
        return 1
    } else{
        result = fib(n-1)+fib(n-2);
        console.log(result);
        return result
    }
}

console.log(fib(10));
