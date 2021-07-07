const express = require('express');      //requires express in order to be used
const cors = require('cors');
const app = express();      //invokes express npm
const path = require('path');       //comes from node
const ctrl = require('./controller');

const { getComments, createComments, deleteComments} = ctrl;

app.use(express.json());
app.use(cors());

app.get('/api/comments', getComments);
app.post('/api/comments', createComments)
app.delete('/api/comments/:commentId', deleteComments);

app.get('/', function(req, res) {
    res.sendFile( path.join(__dirname, '../webpages/home.html'))     //built in res method that will send a file     --      path.join joins the path with your file
});                                                                  //first argument always __dirname, 2nd argument is the path to get to the html file

app.get('/photos', function(req, res) {
    res.sendFile( path.join(__dirname, '../webpages/photography.html'))
});

app.get('/work', function(req, res) {
    res.sendFile( path.join(__dirname, '../webpages/work.html'))
});

app.get('/styles', function(req, res) {
    res.sendFile( path.join(__dirname, '../webpages/style.css'))
});

app.get('/main', function(req, res) {
    res.sendFile( path.join(__dirname, '../webpages/main.js'))
});

app.use(express.static(path.join(__dirname, '../pictures')))
// app.use('/style', express.static('./public/styles.css')) - try this for linking a static css page
// app.get('/styles', function(req, res) {
//     res.sendFile( path.join(__dirname, '../styles.css')) - Do this to link the css file to your html file
// })
//console.log(__dirname); - returns deployment\server, as the starting location
const port = process.env.PORT || 5050;      //will choose to go to the domain or be locally hosted on 5050 if the first argument fails

app.listen(port, function() {
    console.log(`Server is hosted on ${port}`)
})

//http://localhost:5050 - the path to get to the main page
//in the Json file:
//"start": "node server/index.js", //added to tell node what to do 
//"main": "server/index.js",  //changed to refelct the location of the index.js file (added server/)


