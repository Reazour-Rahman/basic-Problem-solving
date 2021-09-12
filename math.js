const number = 30.3332;
const output = Math.ceil(number);
console.log(output);

const number = 30.3332;
const output = Math.floor(number);
console.log(output);

const number = 30.3332;
const output = Math.round(number);
console.log(output);

// random Numbers 

const output = Math.random() * 15;
const rounded = Math.floor(output);
console.log(rounded);

// running from loop 
for (let i = 0; i <= 30; i++) {
    const output = Math.random() * 15;
    const rounded = Math.floor(output);
    console.log(rounded);   
}