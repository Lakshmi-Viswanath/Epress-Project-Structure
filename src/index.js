const express = require("express");
const {PORT} = require('./config/server.config');
const router = require('./routes');
const bodyParser = require('body-parser');

const app = express();

//always use body-parser before registering for router. otherwise which req.body will be empty.
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', router);

app.listen(PORT, () =>{
    console.log(`Server is listening on the port ${PORT}`);
});