const express = require('express')
const handler = require('./handler')
const { validateFields, errorHandler } = require('./middleware')

const app = express()
const port = 3000

app.use(express.json())



app.get('/', handler.mainHandler)

app.get('/items', handler.getHandler)
app.post('/items', validateFields, handler.postHandler)

app.get('/items/:id', handler.getItemHandler)
app.delete('/items/:id', handler.deleteHandler)
app.put('/items/:id', validateFields, handler.putHandler)

//app.get('*', handler.errorHandler) //error handler
// Avec cette methode ça renvoie des errueurs, donc j'ai utilisé la methode ci-dessous
app.use(handler.errorHandler) //404 handler
app.use(errorHandler) //global error handler

app.listen(port, () => {
  console.log(`Express app listening on port http://localhost:${port}`)
})
