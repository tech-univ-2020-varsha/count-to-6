let num = process.argv.splice(2);
let i = 0;
let n = 989898;
//console.log(n);
let min = Math.min(...num);
//let min = Math.min.apply(this, num)  as apply take array of args
console.log(`The minimum of [${num}] is ${min}`)