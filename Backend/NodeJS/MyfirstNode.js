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
fs.writeFile("../../Frontend/Website.txt", 'Hello', 'utf8', (err) => {
    if (err) throw err;
    console.log("File written successfully");
})
