var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    RIGHT = 1,
    LEFT = 2,
    KEYLEFT = 37,
    KEYRIGTH = 39,
    animation = new Animation(context),
    keyboard = new Keyboard(document),
    imgSonic = new Image(),
    obj={x:0,y:0,speedx:10,speedy:10};

var sonic = new Sprite(context,obj,keyboard,itachiSheet);
 
animation.newSprites(sonic);
window.onload=function(){
   animation.on();
}