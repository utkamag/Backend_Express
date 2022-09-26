import express from "express"

const PORT = 5000;

const app = express()

//Firebase

rules_version = '2';
service cloud.firestore {
    match /databases/{database}/documents {
    match /{document=**} {
        allow read, write: if false;
    }
}
}

app.use(express.json())

app.post("/", (req, res) => {
    console.log(req.body)
    res.status(200).json("Сервер работает!")
})

app.listen(PORT, () => console.log("Server Started ON Port" + PORT))

