const fetchDataPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Promise resolved!'), 1000);
  });
};

async function getData() {
  const result = await fetchDataPromise();
  console.log(result);
}

getData();
const fs = require('fs');
fs.readFile('../../Frontend/Website.txt', 'utf8', (err, data) => {
  console.log(data);
});

fs.writeFile("../../Frontend/Website.txt", 'Hello', 'utf8', (err) => {
    if (err) throw err;
    console.log("File written successfully");
})
