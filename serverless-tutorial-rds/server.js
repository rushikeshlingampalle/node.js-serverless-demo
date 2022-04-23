var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

router.get('/hello', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

app.use('/handler', router);