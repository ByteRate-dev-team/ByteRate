const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.send("welcome to ByteRate")
})

app.listen(port, () => {
    console.log('ByteRate listening on port ' + port)
})