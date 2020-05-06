//Local API is connected to BitCoin API. Select currency type and click button to get current currency rate.

const express = require('express')
const app = express()
const fetch = require('node-fetch')
let url = 'https://api.coindesk.com/v1/bpi/currentprice.json'

const port = process.env.PORT || 3000

app.use(express.static('public'))/* says public/ */

app.get('/', (req,res)=>{
    res.render('index.ejs', {symbol: "", rate: ""})/* rate and symbol as empty str*/
})

app.get('/currency', (req,res) => {
    fetch(url)
    .then(response => {

        if (!response.ok) {
            throw Error
        }
        return response.json()
    })
    .then(data => {
        let currency = req.query.currency
        let symbol = data.bpi[currency].symbol
        let rate = data.bpi[currency].rate_float.toFixed(2)
        res.render('index.ejs', {symbol, rate})
    })
    .catch(error => {
        console.log(error)
        res.end()
    })
})


app.listen(port, ()=> (console.log(`listening on port ${port}`)))
