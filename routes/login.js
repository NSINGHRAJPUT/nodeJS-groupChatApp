const express = require('express');
const router = express.Router();

router.get('/login',(req,res,next)=>{
    res.send('<div align="center"><h1>Group Chat Application</h1> <form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/" method="POST"><input type="text" name="username" id="username"><button type="submit">Login</button></form></div>')
})

module.exports = router