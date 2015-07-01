var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/:user', function(req, res, next) {
  var username = req.params.user;
  res.render('index', { user: username });
});
router.post('/:user', function(req, res, next) {

  console.log(req.body);
  console.log(JSON.parse(req.body));
  console.log("you did it. you're famous.");
  fs.writeFile("users.JSON", JSON.parse(req.body))
    // .success(function(res){
    //   console.log("res: ", res);
    // }).catch(function(err){
    //   console.log("err: ", err);
    // });  // res.send('index', { user: username });
});
router.post('/:user/food', function(req, res, next) {

  console.log(req.body);
  res.status(200).send({message: "you win. you're not fat"});
  // res.send('index', { user: username });
});


module.exports = router;


// router.post('/', function(req, res, next) {
//   var newuser = req.body.User;
//   console.log(newuser);
//   console.log("HELOOOOO");
//   // res.render('index', { user: username });
// });
