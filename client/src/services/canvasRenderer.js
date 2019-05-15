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

      let xPos = ((x-1)*100) /*ADD OFFSET*/;
      let yPos = ((y*-100) + 500);

      //Alternates the x position
      if(y % 2 == 1){
        xPos = 500 - xPos
      }

      player.setCoordinates(xPos,yPos);
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

    },

    lerp (start, end, amt){
    console.log("LERPING");
    return (1-amt)*start+amt*end
    },

    distanceCheck(player, tx, ty){
      var dist = Math.sqrt( Math.pow((player.xpos-tx), 2) + Math.pow((player.ypos-ty), 2) );
      if(dist < 0.5){
        return true;
      }
      console.log(dist);
      return false;
    },


    playerSlideAnimationUpdate(player, t){
      var canvas = canvasElement;
      var ctx = context;


      //Move towards targetPosition
      console.log(player);
      //Calculate TARGET Position
      var x = t/*player.position*/ % 6;
      var y = Math.floor((/*player.position*/t-1) / 6);

      //Player at edge of board
      if(x == 0){
        x = 6;
      }

      let xPos = ((x-1)*100);
      let yPos = ((y*-100) + 500);

      //Alternates the x position
      if(y % 2 == 1){
        xPos = 500 - xPos
      }

      player.xpos = this.lerp(player.xpos, xPos, 0.1);
      player.ypos = this.lerp(player.ypos, yPos, 0.1);

      //Render player
      ctx.clearRect(0,0,canvas.height, canvas.width);
      ctx.drawImage(player.avatar,  player.xpos,    player.ypos);

      console.log("SLIDING TO: ", xPos, " FROM: ", player.xpos);

      //Call this until at targetPosition
      if(this.distanceCheck(player,xPos, yPos)){

        setTimeout(() => {
          this.playerSlideAnimationUpdate(player, t);

        }, 500);
      }
    },



  }

  return renderer;
}




module.exports = createRenderer;
