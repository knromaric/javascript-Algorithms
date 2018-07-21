function fibIterative(n) {
    let result = [0, 1];

    for (let i = 2; i <= n; i++) {
        result.push(result[i - 2] + result[i - 1]);
    }

    return result[n];
}


function memoize(fn){
    const cache = {};

    return function(...args) {
        if(cache[args]){
            return cache[args]; 
        }

        const result = fn.apply(this, args);
        cache[args] = result; 

        return result; 
    };
}

function fib(n) {

    if(n < 2 ){
        return n;
    }

    return fib(n - 2) + fib(n - 1);
}

fib = memoize(fib)

module.exports = fib;








