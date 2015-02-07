function Spritesheet(context,img,obj){
  this.img = img;
  this.context = context;
  this.interval = obj.interval || 0;
  this.lines = obj.lines || 0;
  this.columns = obj.columns || 0;
  this.line = obj.line || 0;
  this.column = obj.column || 0;
  this.width = obj.width || 0;
  this.height = obj.height || 0;
  this.run = obj.run || 0;
  this.walk = obj.walk || 0;
}
Spritesheet.prototype.nextFrame=function(){
  var now = +new Date();
  if(!this.lasttime) this.lasttime = now;
  if(now - this.lasttime < this.interval){return;}
  if(this.column < this.columns-1){
    console.log(this.column);
    this.column++;
  }else{
    this.column = 0;
  }
  this.lasttime = now;
}
Spritesheet.prototype.draw=function(x,y){
  var ctx = this.context;
  ctx.drawImage(
    this.img,
    this.width*this.column,
    this.height*this.line,
    this.width,
    this.height,
    x,
    y,
    this.width,
    this.height
  )
}