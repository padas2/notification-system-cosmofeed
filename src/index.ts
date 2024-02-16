import http from "http";
const router = require('find-my-way')()

router.on('GET', '/', (req: any, res: any, params: any) => {
  console.log("Nothing to see here...")
  res.end('{"message":"Nothing to see here... try something else"}')
})

router.on('POST', '/notifications/send', (req: any, res: any, params: any) => {
  console.log(req.body)
  res.end('{"message":"Notification will be sent"}')
})

export const server = http.createServer((req, res) => {
  router.lookup(req, res)
})

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000/");
});