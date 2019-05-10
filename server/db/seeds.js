use snakes_and_ladders;
db.dropDatabase();

db.players.insertMany([ // NEW
  {
    name: "Calum",
    wins: 0,
    losses: 0,
    avitar: ""
  },
  {
    name: "Sri",
    wins: 0,
    losses: 0,
    avitar: ""
  },
  {
    name: "Anne",
    wins: 0,
    losses: 0,
    avitar: ""
  },
]);
