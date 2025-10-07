const express = require('express')
const handler = require('./handler')

const app = express()
const port = 3000



app.get('/', handler.mainHandler)

app.get()
app.post()

app.get('*') //error handler

app.listen(port, () => {
  console.log(`Express app listening on port http://localhost:${port}`)
})
