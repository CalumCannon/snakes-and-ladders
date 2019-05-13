const Player = function(img){
  this.img = img;
  this.position = 1;
  this.targetPosition = 1;
}

Player.prototype.setTargetPositon = function(targetPosition){
  this.targetPosition = this.position + targetPosition;

  this.moveForward();

  //Lower Limit
  if(this.position < 1){
    this.position = 1;
  }
  //Upper Limit
  if(this.position > 36){
    this.position = 36;
  }

}

Player.prototype.reachedTarget = function(){

  if(this.targetPosition == this.position){
      console.log("PLAYER REACHED TARGET", this.targetPosition, this.position);
    return true;
  }
  console.log("PLAYER NOT AT TARGET POS ", this.targetPosition, this.position);
  return false;
}


Player.prototype.moveForward = function(){
  this.position += 1;

}

module.exports = Player;
