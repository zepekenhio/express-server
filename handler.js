
const blogs = {results : []}

module.exports.getHandler = (req,res)=>{
    res.json(blogs.results)
}
module.exports.postHandler = (req,res)=>{
    blogs.results.push(req.body)
    res.send('Item added')
}
module.exports.errorHandler = (req,res)=>{
    res.status(404).send('Not found')
}
module.exports.mainHandler = (req,res)=>{
      return res.send('hello world')
}

module.exports.getItemHandler = (req,res)=>{
    const id = parseInt(req.params.id)
    const item = blogs.results[id]
    if(item){
        res.json(item)
    } else {
        res.status(404).send('Item not found')
    }
}

module.exports.deleteHandler = (req,res)=>{
    const id = parseInt(req.params.id)
    if(id >= 0 && id < blogs.results.length){
        blogs.results.splice(id, 1)
        res.send('Item deleted')
    } else {
        res.status(404).send('Item not found')
    }
}

module.exports.putHandler = (req,res)=>{
    const id = parseInt(req.params.id)
    if(id >= 0 && id < blogs.results.length){
        blogs.results[id] = req.body
        res.send('Item updated')
    } else {
        res.status(404).send('Item not found')
    }
}
