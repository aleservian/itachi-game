function Power(context,obj,objSheet){
  this.context = context;
  this.x = obj.x || 0;
  this.y = obj.y || 0;
  this.speedx = obj.speedx || 0;
  this.speedy = obj.speedy || 0;
  var imgSheet = new Image();
  imgSheet.src = objSheet.img;
  this.sheet = new Spritesheet(context,imgSheet,objSheet.sheet);
  this.direction = RIGHT;
}
Power.prototype.update=function(){
  this.x += this.speedx;
  this.sheet.nextFrame();
}
Power.prototype.draw=function(){
  this.sheet.draw(this.x,this.y); 
}