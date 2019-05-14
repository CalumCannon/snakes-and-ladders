const createSnakesLadders = function(){

const snakesLadders = {

  checkSquare(inSquare){
    //Switch statement
    switch (inSquare){
      //SNAKES
      case 13:
      return 2;
      case 30:
      return 17;
      case 33:
      return 23;
      //LADDERS
      case 4:
      return 17;
      case 15:
      return 26;
      default:
      return inSquare;
    }
  }


}

  return snakesLadders;
}

module.exports = createSnakesLadders;
