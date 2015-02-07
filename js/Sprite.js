function Sprite(context,obj,keyboard,objSheet,animation){
  this.context = context;
  this.animation = animation
  this.keyboard = keyboard;
  this.x = obj.x || 0;
  this.y = obj.y || 0;
  this.speedx = obj.speedx || 0;
  this.speedy = obj.speedy || 0;
  var imgSheet = new Image();
  imgSheet.src = objSheet.img;
  this.sheet = new Spritesheet(context,imgSheet,objSheet.sheet);
  this.walking = false;
  this.direction = RIGHT;
}
Sprite.prototype.draw=function(){
  this.sheet.draw(this.x,this.y); 
}
Sprite.prototype.update=function(){
  if(this.keyboard.down(KEYLEFT)){
    if(!this.walking || this.direction != LEFT){
      this.sheet.line = this.sheet.run.left.line;
      this.sheet.columns = this.sheet.run.left.columns;
      this.sheet.interval = this.sheet.run.interval;
      this.sheet.column = 0;
    }
    this.walking = true;
    this.direction = LEFT;
    this.x-=this.speedx;
    this.sheet.nextFrame();
  }else if(this.keyboard.down(KEYRIGTH)){
    if(!this.walking || this.direction != RIGHT){
      this.sheet.line = this.sheet.run.right.line;
      this.sheet.columns = this.sheet.run.right.columns;
      this.sheet.interval = this.sheet.run.interval;
      this.sheet.column = 0;
    }
    this.walking = true;
    this.direction = RIGHT;
    this.sheet.nextFrame();
    this.x+=this.speedx;
  }else if(this.keyboard.down(KEYQ)){
    if(this.direction===RIGHT){
      this.sheet.line = this.sheet.powerQ.right.line;
      this.sheet.columns = this.sheet.powerQ.right.columns;
    }
    if(this.direction===LEFT){
      this.sheet.line = this.sheet.powerQ.left.line;
      this.sheet.columns = this.sheet.powerQ.left.columns;
    }
    this.sheet.interval=this.sheet.powerQ.interval;
    this.sheet.nextFrame();
  }else{
    if(this.sheet.columns!==this.sheet.walk.right.columns || this.sheet.columns!==this.sheet.walk.left.columns){
      this.sheet.column = 0;
    }
    if(this.direction===RIGHT){
      this.sheet.line = this.sheet.walk.right.line;
      this.sheet.columns = this.sheet.walk.right.columns;
    }
    if(this.direction===LEFT){
      this.sheet.line = this.sheet.walk.left.line;
      this.sheet.columns = this.sheet.walk.left.columns;
    }
    this.sheet.interval=this.sheet.walk.interval;
    this.sheet.nextFrame();
    this.walking = false;
  }
  
}
Sprite.prototype.powerQ=function(){
  console.log('jutsu');
}