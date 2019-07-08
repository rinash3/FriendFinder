
var path = require('path');

// Import the list of friend entries
var friends = require('../data/friends.js');



// Displays all characters
app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    
    var newFriend = req.body;
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
    console.log(newFriend);
    friends.push(newFriend);
  
    res.json(newFriend);
  });
  