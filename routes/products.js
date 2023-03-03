var route = require('express').Router();

route.get("/", function(req, res){
    res.send({})
})

module.exports = route