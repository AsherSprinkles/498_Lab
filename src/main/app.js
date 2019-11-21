var express = require("express")
var app = express()

app.get('/', (req, res) => {
    res.status(200).send("Hello World!")
})

app.listen(3000, () => {
    console.log('Example app listening on http://localhost:3000')
})

module.exports = app