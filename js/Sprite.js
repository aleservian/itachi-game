function Sprite(context,obj,keyboard,objSheet,animation){
  this.context = context;
  this.animation = animation;
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
  this.powerOne = false;
  this.powerTwo = false;
  this.objpower = objSheet.fireball;
}
Sprite.prototype.draw=function(){
  this.sheet.draw(this.x,this.y); 
}
Sprite.prototype.update=function(){
  if(this.keyboard.down(KEYLEFT) && !this.powerOne){
    if(!this.walking || this.direction != LEFT){
      this.sheet.line = this.sheet.run.left.line;
      this.sheet.columns = this.sheet.run.left.columns;
      this.sheet.interval = this.sheet.run.interval;
      this.sheet.column = 0;
    }
    this.walking = true;
    this.direction = LEFT;
    this.sheet.nextFrame();
    this.powerOne = false;
    this.x-=this.speedx;
  }else if(this.keyboard.down(KEYRIGTH) && !this.powerOne){
    if(!this.walking || this.direction != RIGHT){
      this.sheet.line = this.sheet.run.right.line;
      this.sheet.columns = this.sheet.run.right.columns;
      this.sheet.interval = this.sheet.run.interval;
      this.sheet.column = 0;
    }
    this.walking = true;
    this.direction = RIGHT;
    this.sheet.nextFrame();
    this.powerOne = false;
    this.x+=this.speedx;
  }else if(this.powerTwo){
    if(this.sheet.columns!==this.sheet.powerW.right.columns || this.sheet.columns!==this.sheet.powerW.left.columns){
      this.sheet.column = 0;
    }
    if(this.sheet.column === this.sheet.powerW.right.columns-1){
       this.powerTwo = false;
    }
    if(this.direction===RIGHT){
      this.sheet.line = this.sheet.powerW.right.line;
      this.sheet.columns = this.sheet.powerW.right.columns;
    }
    if(this.direction===LEFT){
      this.sheet.line = this.sheet.powerW.left.line;
      this.sheet.columns = this.sheet.powerW.left.columns;
    }
    this.walking=false;
    this.sheet.interval=this.sheet.powerW.interval;
    this.sheet.nextFrame();
  }else if(this.powerOne){
    if(this.sheet.columns!==this.sheet.powerQ.right.columns || this.sheet.columns!==this.sheet.powerQ.left.columns){
      this.sheet.column = 0;
      /*var objPower = {x:this.x+62,y:2,speedx:0},
      power = new Power(context,objPower,this.objpower);
      this.animation.newSprites(power);*/
    }
    if(this.sheet.column === this.sheet.powerQ.right.columns-1){
       this.powerOne = false;
    }
    if(this.direction===RIGHT){
      this.sheet.line = this.sheet.powerQ.right.line;
      this.sheet.columns = this.sheet.powerQ.right.columns;
    }
    if(this.direction===LEFT){
      this.sheet.line = this.sheet.powerQ.left.line;
      this.sheet.columns = this.sheet.powerQ.left.columns;
    }
    this.walking=false;
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
  this.powerOne = true;
}
Sprite.prototype.powerW=function(){
  this.powerTwo = true;
}