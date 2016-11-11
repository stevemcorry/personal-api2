var user = require('../user.js');
module.exports = {
  getName: function(req,res,next) {
    res.json(user.name);
  },
  getLocation: function(req,res,next) {
    res.json(user.location);
  },
  getOccupations: function(req,res,next) {
    res.json(user.occupations);
  },
  getOccupationLast: function(req,res,next) {
    res.json(user.occupations[user.occupations.length - 1]);
  },
  getHobbies: function(req,res,next) {
    if(req.params.type){
      var hobbiesArr = user.hobbies.filter(function(value) {
        return (value.type === req.params.type);
      }); res.json(hobbiesArr);
    } else {
      res.json(user.hobbies);
    }
  },
  getFamily: function(req,res,next) {
    if(req.params.gender){
      var familyArr = user.family.filter(function(value) {
        return (value.gender === req.params.gender);
      });
      res.json(familyArr);
    } else {
      res.json(user.family);
    }
  },
  getRestaurants: function(req,res,next) {
    if(req.params.name){
      var restaurantArr = user.restaurants.filter(function(value) {
        return (value.name === req.params.name);
      });
      res.json(restaurantArr);
    } else{
      res.json(user.restaurants);
    }
  }


};
