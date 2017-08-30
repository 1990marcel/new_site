var express = require('express');
var router = express.Router();
//mongodb
var mongojs = require('mongojs');
var db = mongojs('mongodb://marcel:magaji@ds127132.mlab.com:27132/firstmongo', ['users']);


//routes

//Get all visitors
router.get('/users', function(req, res, next){
  db.users.find(function (err, users) {
    if(err){
      res.send(err);
    }
    res.json(users);
  })
});

//Get Single visitor
router.get('/user/:id', function (req, res, next) {
	db.users.findOne({_id:mongojs.ObjectId(req.params.id)}, function(err, user){
			if(err){
				res.send(err);
			}
			res.json(user);
	});
});


router.get('/reviews', function(req, res, next){
  db.users.find(function (err, users) {
    if(err){
      res.send(err);
    }
    res.json(users);
  })
});

//Get Single visitor
router.get('/reviews/:id', function (req, res, next) {
	db.users.findOne({_id:mongojs.ObjectId(req.params.id)}, function(err, user){
			if(err){
				res.send(err);
			}
			res.json(user);
	});
});

//add user
router.post('/user', function(req, res, next){
		var user = req.body;
		if(!user.first_name || !(user.last_name + '') || !(user.specialty + '') || !(user.likes + '')){
				res.status(400);
				res.json({
					"error":"bad data"
				});
		}else{
			db.users.save(user, function(err, user){
						if(err){
				res.send(err);
			}
			res.json(user); 
			});
		}
});

module.exports = router;
