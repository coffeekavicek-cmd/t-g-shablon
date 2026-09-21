const http=require('http'),fs=require('fs'),path=require('path');
const PORT=process.env.PORT||8080,ROOT=__dirname;
const MIME={'.html':'text/html; charset=utf-8','.js':'application/javascript; charset=utf-8','.css':'text/css; charset=utf-8'};
http.createServer((req,res)=>{let u=decodeURIComponent(req.url.split('?')[0]);if(u==='/')u='/index.html';let f=path.join(ROOT,u);
fs.readFile(f,(e,d)=>{if(e){fs.readFile(path.join(ROOT,'index.html'),(e2,d2)=>{if(e2){res.writeHead(404);return res.end('Not found')}res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});res.end(d2)})}
else{res.writeHead(200,{'Content-Type':MIME[path.extname(f)]||'application/octet-stream'});res.end(d)}})}).listen(PORT,'0.0.0.0',()=>console.log('Jasmina site running on port '+PORT));