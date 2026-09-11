//
setTimeout(() => console.log("Fourth"), 0);
Promise.resolve().then(() => console.log("Third")); 
console.log("Second");