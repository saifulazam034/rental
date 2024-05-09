const express = require("express");
require(`./db/config`);
const cors = require("cors");
const User = require("./db/User");
const Residency = require("./db/Residency");
const app = express();
app.use(express.json());
app.use(cors());

app.post("/users", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  resp.send(result);
});

app.post("/Residencies", async (req, resp) => {
  let residency = new Residency(req.body);
  let result = await residency.save();
  resp.send(result);
});
app.get("/search/:key",async (req,resp)=>{
  let result = await Residency.find({
    "$or": [
      {city: {$regex: req.params.key}},
      {rent: {$regex: req.params.key }},
    ]
  });
  resp.send(result)
});
app.get("/Residency",async (req,resp)=>{
  let residencies = await Residency.find();
  if(residencies.lenght>0){
    resp.send(residencies)
  }else{
    resp.send({result:"no residency"})
  }

})
app.listen(5000, () => {
  console.log("server is running on port $ 5000")
});
