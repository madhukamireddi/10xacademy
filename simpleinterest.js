let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let principle =parseInt(readLine());
let time =parseInt(readLine());
let interestrate =parseInt(readLine());
let interest = (principle*time*interestrate)/100 ;
console.log(interest);