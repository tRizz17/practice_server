const express = require('express')
const app = express();
const port = process.env.PORT || 8086

app.get('/', (req, res) => {
    res.status(200).send("Hello world")
})

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})