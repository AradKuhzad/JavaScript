fetch("https://jsonplaceholder.typicode.com/users/3")
    console.log(data);
    myDisplayer(data.name);
})
function myDisplayer(text) {
    document.getElementById("FetchAPItest").innerHTML = text;
}