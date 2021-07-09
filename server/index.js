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

app.get('/homepage', function(req, res) {
    res.sendFile( path.join(__dirname, '../webpages/homepage.js'))
});    

app.get('/photographypage', function(req, res) {
    res.sendFile( path.join(__dirname, '../webpages/photographypage.js'))
});    

app.get('/workpage', function(req, res) {
    res.sendFile( path.join(__dirname, '../webpages/workpage.js'))
});    


//START OF PICTURES --- BIG OOF

app.get('/pictures/anselTree', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/anselTree.jpeg'))
});    

app.get('/pictures/barpic', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/barpic.jpg'))
});    

app.get('/pictures/bike', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/bike.jpeg'))
});

app.get('/pictures/bridge', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/bridge.jpeg'))
}); 

app.get('/pictures/currentproject', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/currentproject.jpg'))
}); 

app.get('/pictures/firework1', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/firework1.jpg'))
});    

app.get('/pictures/firework2', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/firework2.jpg'))
});

app.get('/pictures/gator', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/gator.jpg'))
}); 

app.get('/pictures/github', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/github.jpg'))
});

app.get('/pictures/glacierLake', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/glacierLake.jpeg'))
}); 

app.get('/pictures/lighthouse', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/lighthouse.jpg'))
}); 

app.get('/pictures/lightning2', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/lightning2.jpg'))
});    

app.get('/pictures/linkedin', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/linkedin.jpg'))
});

app.get('/pictures/mexico', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/mexico.jpg'))
});    

app.get('/pictures/montanasky', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/montanasky.jpeg'))
}); 

app.get('/pictures/moose', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/moose.jpeg'))
}); 

app.get('/pictures/moose', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/moose.jpeg'))
}); 

app.get('/pictures/mooseLong', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/mooseLong.jpeg'))
}); 

app.get('/pictures/puddle', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/puddle.jpeg'))
}); 

app.get('/pictures/scuba', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/scuba.jpg'))
}); 

app.get('/pictures/scubamulti', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/scubamulti.jpg'))
}); 

app.get('/pictures/seaweeds', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/seaweeds.jpg'))
}); 

app.get('/pictures/skills', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/skills.jpg'))
});    

app.get('/pictures/snail', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/snail.jpg'))
});    

app.get('/pictures/snail2', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/snail2.jpg'))
});    

app.get('/pictures/sunflowers', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/sunflowers.jpeg'))
}); 

app.get('/pictures/Sunset', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/Sunset.jpeg'))
});    

app.get('/pictures/sunset2', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/sunset2.jpeg'))
});    

app.get('/pictures/tetons', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/tetons.jpg'))
}); 

app.get('/pictures/underwatertree', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/underwatertree.jpg'))
}); 

app.get('/pictures/woods', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/woods.jpeg'))
});    





//START OF WORK PICTURES

app.get('/pictures/work/beltbuckle', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/work/beltbuckle.jpg'))
}); 

app.get('/pictures/work/beltbuckle2', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/work/beltbuckle2.jpg'))
}); 

app.get('/pictures/work/brassleaf', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/work/brassleaf.jpg'))
}); 

app.get('/pictures/work/candlesticks', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/work/candlesticks.jpg'))
}); 

app.get('/pictures/work/hdoutside', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/work/hdoutside.jpg'))
}); 

app.get('/pictures/work/penstock', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/work/penstock.jpg'))
}); 

app.get('/pictures/work/rotor', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/work/rotor.jpg'))
}); 

app.get('/pictures/work/shaft', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/work/shaft.jpg'))
}); 

app.get('/pictures/work/welds', function(req, res) {
    res.sendFile( path.join(__dirname, '../pictures/work/welds.jpg'))
}); 




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


