var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submit',function(req,res){

  console.log(req.body)

MongoClient.connect("mongodb://localhost:27017", function(err, client) {
    if(err) 
      console.log('error');
    
    else
      console.log('Connected')
      client.db('products').collection('dress').insertOne(req.body);
    
  });



  res.send('got it')
  
})


module.exports = router;
