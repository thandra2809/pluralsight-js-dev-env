let express = require('express');
let path = require('path');
let open = require('open');

let port =3000;
let app = express();

app.get('/', function(request,response) {
  response.sendFile(path.join(__dirname,'../src/index.html'));
});

app.listen(port,function (error) {
  if(error){
   console.log(error);
  }else {
    open('http://localhost:' + port);
  }
});
