require('dotenv').config()
const express = require('express')
const app = express()


const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.get('/login', (req, res) => {
    res.json([{
        name: "abhishek",

    }])
})

app.get('/hate', (req, res) => {
    res.send('<h2>Hello world</h2>')
})

app.listen(PORT, () => {
    console.log(`Server is running on port no: http://localhost:${PORT}`);
})