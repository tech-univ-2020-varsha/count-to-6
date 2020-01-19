let inputs = process.argv.slice(2);
let result = inputs.map(value => value[0]).reduce((accumulator, value) => accumulator + value);

console.log(`[${inputs}] becomes "${result}"`);