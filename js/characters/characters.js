var itachiSheet = {
	img:'img/itachi.png',
	sheet:{
		width: 80,
		height: 80,
	    lines:4,
	    columns:6,
	    line:0,
	    column:0,
	    walk:{
	    	interval: 200,
			right:{line: 0,columns: 2},
	    	left:{line: 1,columns: 2}
	    },
	    run:{
	    	interval: 80,
			right:{line: 2,columns: 6},
			left:{line: 3,columns: 6}
		},
		powerQ:{
			interval: 100,
			right:{line: 4,columns: 7},
			left:{line: 5,columns: 7}
		}
	}
};