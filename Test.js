const http =require('http');

const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Home Page</title></head>');
    res.write('<body>WELCOME TO MY NODE JS PROJECT!</body>')
    res.write('</html>');
    res.end();
})

server.listen(4000);
