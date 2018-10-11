// O(n)

function addUpTo(n) {
    let total = 0;
    for(let i=0; i<=n; i++) {
        total += i;
    }
    return total;
}

let t1 = performance.now();
addUpTo(10000000000);
let t2 = performance.now();

console.log(`addUpTo - Time elapsed: ${(t2 - t1) / 1000} Seconds`);

function addUpToMathSol(n) {
    return n * (n+1) / 2;
}


let t3 = performance.now();
addUpToMathSol(10000000000);
let t4 = performance.now();

console.log(`addUpToMathSol - Time elapsed: ${(t4 - t2) / 1000} Seconds`);