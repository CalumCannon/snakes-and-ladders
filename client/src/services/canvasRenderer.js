const createRenderer = function(canvasElement, context) {

  const renderer = {

    drawPlayer(img, position, offset = 0){
      //Lower Limit
      if(position < 1){
        position = 1;
      }
      //Upper Limit
      if(position > 36){
        position = 36;
      }
      //Canvas
      var canvas = canvasElement;
      var ctx = context;

      //Calculate Position
      var x = position % 6;
      var y = Math.floor((position-1) / 6);

      //Player at edge of board
      if(x == 0){
        x = 6;
      }

      //Alternates the x position
      if(y % 2 == 1){
      ctx.drawImage(img,500 - ((x-1)*100),  ((y*-100) + 500) + offset);
      }else{
      ctx.drawImage(img,((x-1)*100),  ((y*-100) + 500) + offset);
      }

    }

  }

  return renderer;
}




module.exports = createRenderer;
