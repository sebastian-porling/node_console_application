const http = require('http');
const fs = require('fs');

/**
 * Creates a server with to end points, / and all others
 */
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        returnPage('./public/index.html', 200, res);
    } else {
        returnPage('./public/404.html', 404, res);
    }
})

/**
 * Returns a html page or nothing if error
 * @param {String} page html page
 * @param {Number} status http status code
 * @param {Response} res http response
 */
function returnPage(page, status, res) {
    fs.readFile(page, (error, data) => {
        if(error) {return;}
        res.writeHead(status, {'Content-Type': 'text/html', 'Content-Length': data.length});
        res.write(data);
        res.end
    });
}

/**
 * Starts a https server on the given port!
 * @param {*} port 
 */
module.exports.start = (port = 8080) => {
    server.listen(port);
    console.log(`Server started on http://localhost:${port}, CTRL-C for quit`)
};