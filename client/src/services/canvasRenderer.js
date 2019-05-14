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

      let xPos = ((x-1)*100) + offset;
      let yPos = ((y*-100) + 500) + offset;

      //Alternates the x position
      if(y % 2 == 1){
        xPos = 500 - xPos
      }

      ctx.drawImage(player.avatar,xPos,  yPos);

      let name = player.nickname;

      ctx.font = "bold 30px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "left";
      ctx.fillText(name, xPos,yPos + 50);
      ctx.fillStyle = "white";
      ctx.strokeText(name, xPos, yPos + 50);

      //Return true if player has reached target
      if(player.position < player.targetPosition){
        return false;
      }
      return true;

    },

    renderSnakesLadders(snakesladders){
      //Canvas
      var canvas = canvasElement;
      var ctx = context;

      ctx.drawImage(snakesladders,20, 20);

    }

  }

  return renderer;
}




module.exports = createRenderer;
