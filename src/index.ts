import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.text('Hello, Hono!'))

const PORT = 3000;
console.log(`=== Listening on: ${PORT}`)

export default {
  port: PORT,
  fetch: app.fetch
}
