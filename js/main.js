var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    RIGHT = 1,
    LEFT = 2,
    KEYLEFT = 37,
    KEYRIGTH = 39,
    KEYQ = 81,
    animation = new Animation(context),
    keyboard = new Keyboard(document),
    imgSonic = new Image(),
    obj={x:0,y:0,speedx:10,speedy:10};

var itachi = new Sprite(context,obj,keyboard,itachiSheet,animation);
 
animation.newSprites(itachi);
keyboard.shot(KEYQ,function(){
  itachi.powerQ();
})
window.onload=function(){
   animation.on();
}