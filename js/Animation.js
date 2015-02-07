function Animation(context){
  this.context = context;
  this.sprites = [];
  this.connected = false;
}
Animation.prototype.newSprites=function(sprite){
  this.sprites.push(sprite);
}
Animation.prototype.clearScreen=function(){
  var ctx = this.context;
  ctx.clearRect(0,0,canvas.width,canvas.height);
}
Animation.prototype.off=function(){
  this.connected=false;
}
Animation.prototype.on=function(){
  this.connected=true;
  this.nextFrame();
}
Animation.prototype.nextFrame=function(){
  if(!this.connected) return; 
  this.clearScreen();
  for(var i=this.sprites.length;i--;){
    this.sprites[i].update();
  }
  for(var i=this.sprites.length;i--;){
    this.sprites[i].draw();
  }
  var _this = this;
  requestAnimationFrame(function(){
    _this.nextFrame();
  })
}