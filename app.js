const express = require('express');
const bodyParser = require('body-parser');
const loginRoutes = require('./routes/login')
const fs = require('fs');
const store = require('store2')

const app = express();
app.use(bodyParser.urlencoded({extended:false}))

app.use(loginRoutes)

app.post('/',(req,res,next)=>{
    const read = fs.readFileSync("message.text").toString("UTF8").split("").join("").toString();
    res.send(`
    <div align="center"><h1>Group Chat Application</h1>
    <form action="/" method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')">
    <input type="text" name="message">
    <input type="text" hidden name="username" id="username">
    <button type="submit">Send Message</button>
    </form><h3>ChatBox</h3>
    <div>${read}</div>
    </div>`)
    fs.appendFileSync('message.text',`${req.body.username}:${req.body.message}`)
    console.log(req.body)
})


app.listen(4000)