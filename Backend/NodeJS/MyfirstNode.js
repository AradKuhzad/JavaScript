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
  if (err) throw err;
  console.log(data);
});

fs.writeFile("../../Frontend/Website.txt", 'Hello', 'utf8', (err) => {
    if (err) throw err;
    console.log("File written successfully");
})

const fs2 = require('fs')
fs2.readFile("../../../JAVASCRIPT/README.md", 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data)
})

