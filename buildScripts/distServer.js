/**
 * Created by haich on 5/6/2018.
 */
import express from'express';
import path from 'path';
import open from 'open';
import compression from 'compression';


const port = 8787;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/',function (req, res) {
  console.log("HEllo WORLD");
  res.sendFile(path.join(__dirname,'../dist/index.html'));
});

app.get('/users',(req,res)=> {
  res.json([
    {"id":1,"firstName":"Venkat","lastName":"mailram","email":"mailaramc@gmail.com"},
    {"id":2,"firstName":"Chary","lastName":"mailram","email":"chary@gmail.com"},
    {"id":3,"firstName":"Lakshmi","lastName":"mailram","email":"lakshmi@gmail.com"},
    {"id":4,"firstName":"Ammulu","lastName":"Likhita","email":"Ammulu@gmail.com"}
  ]);
});

app.listen(port,function (err) {
  if(err){
    console.log(err);
  } else {
    console.log("app listening port is ::" +port);
    open('http://localhost:'+port);
  }
});
