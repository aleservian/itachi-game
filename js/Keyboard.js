function Keyboard(doc){
  this.pressed = [];
  this.fired = [];
  this.functionsFired = [];
  var _this = this;
  doc.addEventListener('keydown',function(e){
    var key = e.keyCode;
    _this.pressed[key] = true;
    if(_this.functionsFired[key] && !_this.fired[key]){
       _this.fired[key] = true;
       _this.functionsFired[key]();
    }
  })
  doc.addEventListener('keyup',function(e){
    var key = e.keyCode;
    _this.pressed[key] = false;
    _this.fired[key] = false;
  })
}
Keyboard.prototype.down=function(key){
  return this.pressed[key];
}
Keyboard.prototype.shot=function(key,callback){
  this.functionsFired[key] = callback;
}