import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbMessages.js'
import cors from 'cors'
import Pusher from 'pusher'


// app config
const app = express()
const port = process.env.PORT || 9000
const connnection_url = 'mongodb+srv://admin:nuS5X8fvNIIEi13O@cluster0.qwsml.mongodb.net/whatsappDB?retryWrites=true&w=majority'

const pusher = new Pusher({
    appId: "1234273",
    key: "d725605b6498834dce65",
    secret: "b84869540edf2e782952",
    cluster: "ap2",
    useTLS: true
  });

// middleware
app.use(express.json())
app.use(cors())




// DB config
mongoose.connect(connnection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// api routes
const db = mongoose.connection
db.once("open", () => {
    console.log("DB connected")
    const msgCollection = db.collection("whatsappmessages")
    const changeStream = msgCollection.watch()
    changeStream.on("change", (change) => {
        console.log(change)
        if (change.operationType === "insert") {
            const messageDetails = change.fullDocument
            pusher.trigger("message", "inserted", {
                message: messageDetails.message,
                name: messageDetails.name,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received
            })
        }
        else {
            console.log('Error Trigerring Pusher')
        }
    })
})
app.get("/", (req, res) => res.status(200).send('Hello World'))

app.get('/messages/sync', (req, res) => {
    Messages.find((err, data) => {
        if (err)
            res.status(500).send(err)
        else
            res.status(200).send(data)
    })
})

app.post('/messages/new', (req, res) => {
    const dbMessage = req.body
    Messages.create(dbMessage, (err, data) => {
        if (err)
            res.status(500).send(err)
        else
            res.status(201).send(data)
    })
})

app.listen(port, () => console.log(`Listening on localhost:${port}`))