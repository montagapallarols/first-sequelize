const express = require("express")
const User = require("./models").user;
const app = express()

app.get("/users", async (req, res) => {
    const users = await User.findAll();
    res.send(users);
  });

app.listen(4000, ()=>{
    console.log("Server running on port 4000")
})