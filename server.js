// We’ll declare all our dependencies here
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path')


////import routes
const api = require('./routes/api')


//Connect mongoose to our database
mongoose.connect(config.database)
.then(()=>console.log('mongodb connected...'))
.catch(err=>console.log(err));

//Declaring Port
const port = 7000;

//Initialize our app variable
const app = express();





//Middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

/*express.static is a built in middleware function to serve static files.
 We are telling express server public folder is the place to look for the static files
*/
app.use(express.static(path.join(__dirname, 'public')));


///set routes
app.use('/api',api)

//Listen to port 7000
app.listen(port, () => {
    console.log(`Starting the server at port ${port}`);
});


//////////////////