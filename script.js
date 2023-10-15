const fs = require('fs');

const reading = fs.readFileSync("./hello/file.txt","utf-8");
console.log('reading');