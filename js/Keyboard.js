function Keyboard(doc){
  this.pressed = [];
  this.fired = [];
  this.functionsFired = [];
  var _this = this;
  doc.addEventListener('keydown',function(e){
    var key = e.keyCode;
    _this.pressed[key] = true;
  })
  doc.addEventListener('keyup',function(e){
    var key = e.keyCode;
    _this.pressed[key] = false;
  })
}
Keyboard.prototype.down=function(key){
  return this.pressed[key];
}