const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const createRouter = require('./helpers/create_router.js')
const MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.json());
app.use(cors());


MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('snakes_and_ladders');
  const playerCollection = db.collection('players');
  const playerRouter = createRouter(playerCollection);
  app.use('/api/players', playerRouter );
}).catch(console.err);


app.listen(3000, function () {
  console.log(`App running on port ${ this.address().port }`);
});
