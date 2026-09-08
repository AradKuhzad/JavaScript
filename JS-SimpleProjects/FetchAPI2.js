fetch("https://jsonplaceholder.typicode.com/users/3")
.then( response => response.json())
.then(data => {
    console.log(data);
    myDisplayer(data.name);
})
function myDisplayer(text) {
    document.getElementById("FetchAPItest").innerHTML = text;
}