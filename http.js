const http = require('http')

const server = http.createServer((req, rez) => {
    if (req.url === '/') {
        rez.end('Wolcome to home page')
    }
    if (req.url === '/about') {
        rez.end('About page')
    }
    rez.end(`
    <h1>Oops!</h1>
    <p>404</p>
    <a href='/'>Home</a>`)
})

server.listen(5000)