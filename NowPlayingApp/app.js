//App Connects Local API to TMDb API. CLick the buttom on homepage to get a current list of movies, summary, and ratings

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const $fetch = require('node-fetch')

let url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=6113b190a331340649f83bca3c3394d6'

app.use(express.static('public'))


app.get('/' , (req,res)=> {
    res.render('home.ejs', {title: "", script: "", rating: "", img: ""})
})

app.get('/results', (req,res)=>{
    $fetch (url)
    .then(response => {
        if (!response) {
            throw Error
        } 
        return response.json()
        })
    .then(data => {// grabing the data we want  
        res.render('results.ejs', {data: data.results})
    })
    .catch(error =>{
        console.log(error)
        res.end()
    })
    
})

app.listen(port, ()=> {
    console.log(`listening on port ${port}`)
})
