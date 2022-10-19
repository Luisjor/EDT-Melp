const express = require('express');
const cors = require('cors')
const app = express();

app.use(
    cors({
        origin: "*",
    }))

app.get('/', (req, res) => {
    res.send('Welcome to CORS server 😁')
})
app.get('/cors', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send({ "msg": "This has CORS enabled 🎈" })
})
app.listen(3000, () => {
    console.log('listening on port 3000')
})
app.get('/cors', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send({ "msg": "This has CORS enabled 🎈" })
    })
const response = await fetch('http://localhost:3000/cors', { mode: 'cors' });