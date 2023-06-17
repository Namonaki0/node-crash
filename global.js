const int = setInterval(() => {
  console.log("Hello");
}, 1000);

setTimeout(() => {
  clearInterval(int);
}, 5000);

console.log(__dirname);
console.log(__filename);
