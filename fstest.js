const fs=require('fs');
const console=require('util');

console.log('aaaaa', __dirname);
console.log('bbbbbbb', __dirname);

fs.readFile(__dirname+'/fstest.js', 'utf-8', (err, data)=> {
    if(err) return console.error(err);

    console.log("### 11111data>>", data);
});

console.log("-------------------------------------");

let data2 = fs.readFileSync(__dirname+'/fstest.js', 'utf-8');
console.log("### 22222data2>>", data2);

console.log("======================================");