};

async function getData() {
  const result = await fetchDataPromise();
  console.log(result);
}

getData();