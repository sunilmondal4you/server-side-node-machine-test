let express = require('express');
let cors = require('cors')
let bodyParser = require('body-parser')


let app = express();

// for cross origin request.
app.use(cors());

// parse application/json
app.use(bodyParser.json());


let list = [];


/** GET RETURNS ALL PRODUCT */
app.get("/", function(req, res) {
    
    res.json(list);
});


/** POST SAVE PRODUCT INTO DB */
app.post("/", function(req, res){
    let inputRequest = req.body;
    list.push(inputRequest);
    
    res.json(inputRequest);
});

/** POST SAVE PRODUCT INTO DB */
app.put("/", function(req, res){
    list = req.body;

    res.json(list);
});


/** STARTHE THE SERVER */
app.listen(3000, function() {
    console.log('server.started');
});