const route = require('express').Router();
const db = require('better-sqlite3')('db.sqlite', { verbose: console.log });

route.get("/", function(req, res){
    const result = db.prepare('SELECT * FROM products').all();
    res.send(result)
})

module.exports = route