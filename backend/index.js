const express = require('express');
const app = express()
const port = 4000
const mongoDB = require("./db")
const bodyParser = require("body-parser");
const cors = require('cors');

// Connect to MongoDB using the imported function
mongoDB();

app.use(bodyParser.json());

//Use the CORS middleware to handle CORS headers

// Allow requests from 'https://food-menu-cms.vercel.app'
const corsOptions = {
    origin: 'https://tasty-food-repo-wty3.vercel.app',
  };
app.use(cors(corsOptions));

app.use(express.json())

//Define the routes
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require ("./Routes/LoginUser"));
app.use('/api', require('./Routes/DisplayData'));

//Default route
app.get('/', (req, res) => {
    res.send('Hello World! ----')
})

//Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})