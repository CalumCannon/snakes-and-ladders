const Player = function(id, name, img, wins, losses){
  this.id = id;
  this.nickname = name;
  this.avatar = new Image();
  this.avatar.src = img;
  this.position = 1;
  this.targetPosition = 1;
  this.wins = wins;
  this.losses = losses;
  this.xpos = 0;
  this.ypos = 0;
}

Player.prototype.setTargetPositon = function(targetPosition){
  this.targetPosition = this.position + targetPosition;
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

Player.prototype.setCoordinates = function(xpos,ypos){
  this.xpos = xpos;
  this.ypos = ypos;
}



module.exports = Player;
