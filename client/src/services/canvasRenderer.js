const createRenderer = function(canvasElement, context) {

  const renderer = {

    moveToPosition(targetPosition){
      //MoveForward if not at target space

    },

    renderPlayer(player, offset = 0){
      //Canvas
      var canvas = canvasElement;
      var ctx = context;

      //Calculate Position
      var x = player.position % 6;
      var y = Math.floor((player.position-1) / 6);

      //Player at edge of board
      if(x == 0){
        x = 6;
      }

      //Alternates the x position
      if(y % 2 == 1){
      ctx.drawImage(player.img,500 - ((x-1)*100),  ((y*-100) + 500) + offset);
      }else{
      ctx.drawImage(player.img,((x-1)*100),  ((y*-100) + 500) + offset);
      }

      if(player.position < player.targetPosition){
        return false;
      }
      return true;

    }

  }

  return renderer;
}




module.exports = createRenderer;
