import fs from 'fs';
import http from 'http';

const server = http.createServer((req, resp) => {

    console.log(req.url);

    // resp.writeHead(200, {'content-type': 'text/html'});
    // resp.write('<h1>Hello world</h1>');
    // resp.end();

    // const data = {
    //     name: 'Peter Parker',
    //     age: 18,
    //     city: 'New York'
    // }

    // resp.writeHead(200, {
    //     'content-type': 'application/json'
    // });

    // resp.end(JSON.stringify(data));

    // if(req.url === '/'){
    //     const html = fs.readFileSync('./public/index.html', 'utf-8');
    //     resp.writeHead(200, {'content-type': 'text/html'});
    //     resp.end(html);
    // }else{
    //     resp.writeHead(404, {'content-type': 'text/html'});
    //     resp.end();
    // }

    if(req.url === '/'){
        const html = fs.readFileSync('./public/index.html', 'utf-8');
        resp.writeHead(200, {'content-type': 'text/html'});
        resp.end(html);
        return;
    }


});

server.listen(8080, () => {

    console.log('Server running on port 8080');
});
