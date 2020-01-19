let average = (...args) => {
    let sum = args.reduce((sum, val) => {
        return sum + val;
    }, 0);

    return (sum / args.length);
}

module.exports = average;

console.log(average(2, 3, 4, 6, 1));