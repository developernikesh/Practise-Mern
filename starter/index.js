const fs = require("fs");

// Blocking/Synchronous way

const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);
const textOut = `This is what we know about avacado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log("File written");

// Non-blocking/Asyncronous Way
fs.readFile("./txt/start.txt", (err, data) => {
  console.log("err:", err);
  console.log("data:", data);
});
