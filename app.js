const http = require('http');
const { url } = require('inspector');

function rqlistener(req, res) {
    //console.log('Abhishek');
    //console.log(req);
    // console.log(req.url, req.method, req.headers);
    // process.exit();
    //console.log('Abhishek');

    const urll = req.url;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    if (urll.match('home')) {
        res.write('<body><h1>Welcome Home</h1></body>');
    } else if (urll.match('about')) {
        res.write('<body><h1>Welcome to About Us page</h1></body>');
    } else {
        res.write('<body><h1>Welcome to my Node Js project</h1></body>');
    }
    res.write('</html>');
    res.end();
}

const server = http.createServer(rqlistener);
server.listen(3000);