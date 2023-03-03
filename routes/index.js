var route = require('express').Router();

route.get("/", function(req, res){
    res.send("OK")
})

module.exports = route