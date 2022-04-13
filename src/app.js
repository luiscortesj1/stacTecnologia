const express = require('express');
const app = express();
const path=require('path');
const cors = require('cors');
const corsOptions = {
    origin: "*"
  };
  
  app.use(cors(corsOptions));
  const allowCrossDomain = function(req, res, next) {
      res.header('Access-Control-Allow-Origin', "*");
      res.header("Access-Control-Allow-Methods", "OPTIONS, POST, GET, PUT, DELETE");
      res.header('Access-Control-Allow-Headers', "*");
      res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
      next();
    }
app.use(allowCrossDomain);

const port='3001';
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.urlencoded({ extended: false }));

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(express.static(path.resolve(__dirname, '../public')));

const apiProductosRouter=require('./routes/api/productos');

app.use('/productos', apiProductosRouter);
