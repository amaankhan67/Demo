const http =require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url==='/')
    {
        fs.readFile('\message.txt', 'utf8', (err, data) => {
            if (err) {
              console.error(err);
              return;
            }
            res.write('<html>');
            res.write('<head><title>Enter Message</title></head>');
            res.write('<body>');
            res.write(`${data}`);
            res.write('<br><form action="/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button></body>')
            res.write('</html>');
            return res.end();
          });

    }
    if(url==='/message'  && method==='POST')
    {
        const body=[];
        req.on('data', (chunk)=>{
            body.push(chunk);
        });

        req.on('end', ()=>{
            const parsedBody=Buffer.concat(body).toString();
            const message=parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
        });

        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();
    }
    // res.setHeader('Content-Type','text/html');
    // res.write('<html>');
    // res.write('<head><title>Home Page</title></head>');
    // res.write('<body>WELCOME TO MY NODE JS PROJECT!</body>')
    // res.write('</html>');
    // res.end();
})

server.listen(4000);
