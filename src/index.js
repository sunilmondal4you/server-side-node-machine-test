let express = require('express');
let cors = require('cors')

let app = express();

// for cross origin request.
app.use(cors());


/** GET RETURNS ALL PRODUCT */
app.get("/", function(req, res) {
    let output = [{productId: 1, productName : 'VIVO',  categoryName: 'Mobile', categoryId: 'V100'}];
    res.json(output);
});


/** POST SAVE PRODUCT INTO DB */
app.post("/", function(req, res){
    
    let output = {productId: 1, productName : 'VIVO',  categoryName: 'Mobile', categoryId: 'V100'};
    res.json(output);
});


/** STARTHE THE SERVER */
app.listen(3000, function() {
    console.log('server.started');
});