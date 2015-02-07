var sonicSheet = {
	img:'http://alexandreservian.com.br/game/spritesheet.png',
	sheet:{
		width: 52,
		height: 52,
		walk:{
			left: {lines:0},
			right: {}
		},
		run:{
			left:{line: 1,columns: 8},
			right:{}
		},
		interval:60,
	    lines:3,
	    columns:8,
	    line:0,
	    column:0
	}
};

var itachiSheet = {
	img:'img/itachi.png',
	sheet:{
		width: 80,
		height: 80,
		interval:60,
	    lines:4,
	    columns:6,
	    line:0,
	    column:0,
	    walk:{
			right:{line: 0,columns: 2},
	    	left:{line: 1,columns: 2}
	    },
	    run:{
			right:{line: 2,columns: 6},
			left:{line: 3,columns: 6}
		}
	}
};