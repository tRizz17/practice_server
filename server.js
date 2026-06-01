const express = require('express')
const app = express();
const port = 8086

app.get('/', (req, res) => {
    res.status(200).send("Hello world\n")
})

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})