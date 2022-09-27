const express = require('express')
const mogoose = require('mongoose')

const PORT = 5000;
const DB_URL = `mongodb+srv://utkamag:Hesoyam1973@cluster0.bcvw0c6.mongodb.net/?retryWrites=true&w=majority`

const app = express()


app.use(express.json())

app.post("/", (req, res) => {
    console.log(req.body)
    res.status(200).json("Сервер работает!")
})

async function startApp() {
    try {
        await mogoose.connect(DB_URL)
        app.listen(PORT, () => console.log("Server Started ON Port" + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()

