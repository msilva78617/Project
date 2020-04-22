const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const debug = require("debug")("app");



app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.get('/', (req,res) => {
    res.render('home.ejs')
})

app.get('/about', (req,res) => (res.render('about.ejs')))
app.get('/contact', (req,res) => (res.render('contact.ejs')))

app.listen(port, ()=> {debug(`listeing on port ${port}`)})













