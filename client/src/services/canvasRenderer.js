const createRenderer = function(canvasElement, context) {

  const renderer = {


    drawPlayerOne(img, position){
      var canvas = canvasElement;
      var ctx = context;

      //Calculate position from position variable

      // 1 - 6 :
      //calculate x using 36 % position : ALTERNATE
      const x = 36 % position;
      const y = position % 6;
      //calculate y using 36 / 6 Rounded down to full number?

      ctx.drawImage(img, x*10, (y*10));
    }

  }

  return renderer;
}




module.exports = createRenderer;
