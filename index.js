const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.port || 5000
const catageory = require('./categories.json')
const news = require('./news.json')
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World! hello')
})
app.get('/catageory', (req, res) => {
    res.send(catageory)
})
app.get('/news', (req, res) => {
    res.send(news)
})
app.get('/news/:id', (req, res) => {
    let id = req.params.id;
    let finding = news.find(item => item._id === id)
    if (finding) {
        res.send(finding)
    } else {
        res.send("[error]")
    }
})

app.get('/catageory/:id', (req, res) => {
    let id = req.params.id;
    let finding = news.filter(item => item.category_id === id)
    if (id === "0") {
        res.send(news)
    } else {
        res.send(finding)
    }


})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})