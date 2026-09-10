    setTimeout(() => resolve('Promise resolved!'), 1000);
  });
};

async function getData() {
  const result = await fetchDataPromise();
  console.log(result);
}

getData();