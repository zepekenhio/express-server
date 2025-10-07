
const blogs = {results : [], nextId: 1}

module.exports.getHandler = (req,res)=>{
    res.json(blogs.results)
}
module.exports.postHandler = (req,res)=>{
    const newItem = {
        id: blogs.nextId++,
        ...req.body
    }
    blogs.results.push(newItem)
    res.json({message: 'Item added', item: newItem})
}
module.exports.errorHandler = (req,res)=>{
    res.status(404).send('Not found')
}
module.exports.mainHandler = (req,res)=>{
      return res.send('hello world')
}

module.exports.getItemHandler = (req,res)=>{
    const id = req.params.id
    const item = blogs.results.find(item => item.id === id)
    if(item){
        res.json(item)
    } else {
        res.status(404).send('Item not found')
    }
}

module.exports.deleteHandler = (req,res)=>{
    const id = req.params.id
    const itemIndex = blogs.results.findIndex(item => item.id === id)
    if(itemIndex !== -1){
        const deletedItem = blogs.results.splice(itemIndex, 1)[0]
        res.json({message: 'Item deleted', item: deletedItem})
    } else {
        res.status(404).send('Item not found')
    }
}

module.exports.putHandler = (req,res)=>{
    const id = req.params.id
    const itemIndex = blogs.results.findIndex(item => item.id === id)
    if(itemIndex !== -1){
        blogs.results[itemIndex] = {
            id: id,  // Keep the original ID
            ...req.body
        }
        res.json({message: 'Item updated', item: blogs.results[itemIndex]})
    } else {
        res.status(404).send('Item not found')
    }
}
