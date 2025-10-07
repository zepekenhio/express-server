const express = require('express')
const handler = require('./handler')

const app = express()
const port = 3000

app.use(express.json())



app.get('/', handler.mainHandler)

app.get('/items', handler.getHandler)
app.post('/items', handler.postHandler)

app.get('/items/:id', handler.getItemHandler)
app.delete('/items/:id', handler.deleteHandler)
app.put('/items/:id', handler.putHandler)

//app.get('*', handler.errorHandler) //error handler
app.use(handler.errorHandler) //error handler

app.listen(port, () => {
  console.log(`Express app listening on port http://localhost:${port}`)
})
