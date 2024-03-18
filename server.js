var express = require("express") 
var app = express()
 var port = process.env.port || 3000;
 
 app.get("/addTwoNumbers", (req,res)=> {
    var num1= parseInt(req.query.num1);
    var num2= parseInt(req.query.num2);

    var sum= num1 + num2;
    res.json({sum});
 });

 
 app.listen(port,()=>{
 console.log("App listening to: "+port)
 })
