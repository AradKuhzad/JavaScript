const fs = require("fs").promises;

async function getUserdata(userID) {
    try {
        const data = await fs.readFile("../../Frontend/data.json");
        const users = JSON.parse(data);
        const UserData = users.find(item => item.user.id === userID);

        return UserData;
    } catch (error) {
        console.error("Failed to fetch user data:", error);
        throw error;
    }
}

async function main() {
    const data = await getUserdata(102);
    console.log(data);    
}
main();

/*
const myPromis = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = Math.random() > 0.5;

        if (success) {
            resolve('Operation completed successfully');
        } else {
            reject(new Error('Operation failed'));
        }
    }, 1000);
});

myPromis
    .then(result => console.log('Success: ', result))
    .catch(error => console.error('Error: ', error.message));

*/

/*      
const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hello there!");
}).listen(8080);
*/

const fs2 = require('fs');

const writableStream = fs2.createWriteStream('Untitled/output.txt');

writableStream.write('Hello, ');
writableStream.write('World!');
writableStream.write('\nWriting to a stream is easy!');

writableStream.end();

writableStream.on('finish', () => {
  console.log('All data has been written to the file.');
});

writableStream.on('error', (err) => {
  console.error('Error writing to stream:', err);
});

//
