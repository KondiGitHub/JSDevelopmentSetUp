/**
 * Created by haich on 5/6/2018.
 */
import express from'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 8787;
const app = express();

const compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler,{
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/',function (req, res) {
  res.sendFile(path.join(__dirname,'../src/index.html'));
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
    open('http://localhost:'+port);
  }
})
