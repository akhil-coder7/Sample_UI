const path = require("path")
const express = require("express")
const app = express()
const port = 7070

app.set("views", path.resolve(__dirname, "View")); // path to views
app.use(express.static(__dirname + '/Assets'));

app.get('/', (req, res) => {
    res.sendFile(__dirname+"/View/index.html")
})

app.listen(port, () => console.log("listening at http://localhost:${port}"))