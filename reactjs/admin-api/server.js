const jsonServer = require('json-server')
const jwt = require('jsonwebtoken');
const cors = require('cors');

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({ noCors: true })

server.use(
    cors({
        origin: true,
        credentials: true,
        preflightContinue: false,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    })
);
server.options('*', cors());

server.use(middlewares)
server.use(jsonServer.bodyParser)

// server.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
//     res.header('Access-Control-Allow-Headers', '*')
//     next()
// })

// Add custom routes before JSON Server router
server.post('/auth/login', (req, res) => {
    const { username, password } = req.body
    if (username === "admin" && password === "123456") {
        let token = jwt.sign({ username, roles: ["read_users"] }, 'this_is_a_private_key',  { expiresIn: 8 * 60 * 60 });
        res.jsonp({
            success: true,
            username: username,
            token
        })
    } else {
        res.jsonp({
            success: false,
            message: "Username or password is incorrect!"
        })
    }
})

server.use((req, res, next) => {
    let data = req.headers.authorization && req.headers.authorization.split(" ")
    if (data && data.length === 2) {
        let token = data[1]
        try {
            var decoded = jwt.verify(token, 'this_is_a_private_key');
            if (decoded.username) {
                next()
            } else {
                res.sendStatus(401)
            }
        } catch {
            res.sendStatus(401)
        }
    } else {
        res.sendStatus(401)
    }
})

server.use(router)

server.listen(3001, () => {
    console.log('JSON Server is running at port 3001')
})