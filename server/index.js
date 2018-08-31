require('dotenv').config();
const express = require('express');
const {json} = require('body-parser');
const app = express();
const massive = require('massive');
const port = process.env.PORT || 3002;

const controller = require('./controller');

massive( process.env.CONNECTION_STRING )
.then( dbInstace =>  {
//  console.log('Copy of my DB: ', dbInstace);
app.set('db', dbInstace)
  })
.catch(error => console.log('DANGER! ERROR : ', error ));

app.use(json());

// ENDPOINT SET-UP
app.get('/api/house', controller.getAll);

app.listen(port, () => {
  console.log(`Server is UP and listening on prot ${port}`);
});