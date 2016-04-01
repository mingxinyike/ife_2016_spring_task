

window.onload=function(){
    chessboardReady();
    var chess = document.getElementById('chess');
    var boxInit = {
		"x": Math.floor(Math.random() * 10) + 1,
		"y": Math.floor(Math.random() * 10) + 1,
		direction: 1,
		"boxWidth": document.getElementsByClassName('box')[0].offsetWidth,
		
	}
	boxInit.setPosition = function() {
		chess.style.top = this.y * this.boxWidth + "px";
		chess.style.left = this.x * this.boxWidth + "px";
	}
	boxInit.setDirection = function() {
		chess.style.transform ="rotate(0deg)";
	}
    
    
    boxInit.setPosition();
    boxInit.setDirection();
    document.getElementById('btn').addEventListener('click', btnGo);
    
    //绘制棋盘
	function chessboardReady(){
		var chessboard = document.getElementById("chessboard");
		var chess = document.getElementById("chess");
		var node = document.createElement("div");
		node.setAttribute("class","axis");
		chessboard.insertBefore(node, chess);
		for (var i = 1; i < 11; i++) {
			var newnode = document.createElement("div");
			newnode.setAttribute("class","axis");
			newnode.innerHTML = i;
			chessboard.insertBefore(newnode, chess);
		}
		for (var i = 1; i < 11; i++) {
			var newnode = document.createElement("div");
			newnode.setAttribute("class","axis");
			newnode.innerHTML = i;
			chessboard.insertBefore(newnode, chess);
			
			for (var j = 1; j < 11; j++) {
				var newnode = document.createElement("div");
				newnode.setAttribute("class","box");
				chessboard.insertBefore(newnode, chess);
			}
		}
	} 

	//btn onclick
	function btnGo(){
		var order  = document.getElementById("text").value;
		chess.className = "slow";
		switch(order.trim().toLowerCase()) {
			case "go":
				stepForward(boxInit.direction);
				break;
			case "tun lef":
				turn('left');
				break;
			case "tun rig":
				turn('right');
				break;
			case "tun bac":
				turn('back');
				break;
			case "tra lef":
				stepForward(4);
				break;
			case "tra rig":
				stepForward(2);
				break;
			case "tra top":
				stepForward(1);
				break;
			case "tra bot":
				stepForward(3);
				break;
			case "mov lef":
				face('left');
				break;
			case "mov rig":
				face('right');
				break;
			case "mov top":
				face('top');
				break;
			case "mov bot":
				face('bottom');
				break;
			default:
				break;
		}
	}
	//向前一步,输入方向
	function stepForward(direction) {
		switch (direction) {
			case 1:
				boxInit.y = (boxInit.y > 1)? boxInit.y-1: boxInit.y;
				break;
			case 4:
				boxInit.x = (boxInit.x > 1)? boxInit.x-1: boxInit.x;
				break;
			case 2:
				boxInit.x = (boxInit.x < 10)? boxInit.x+1: boxInit.x;
				break;
			case 3:
				boxInit.y = (boxInit.y < 10)? boxInit.y+1: boxInit.y;
				break;
			default:
				break;
		}
		boxInit.setPosition();	
	}
	//向左／右／后转
	function turn(direction) {
		switch(direction) {
			case 'left':
				var deg = parseInt(chess.style.transform.match(/-?\d+/))-90;
				boxInit.direction = boxInit.direction-1 > 0 ? (boxInit.direction - 1): 4;
				chess.style.transform ="rotate("+deg+"deg)";
				break;
			case 'right':
				var deg = parseInt(chess.style.transform.match(/-?\d+/))+90;
				boxInit.direction = boxInit.direction+1 <5 ? boxInit.direction + 1: 1;
				chess.style.transform ="rotate("+deg+"deg)";
				break;
			case 'back':
				var deg = parseInt(chess.style.transform.match(/-?\d+/))+180;
				boxInit.direction = boxInit.direction + 2 > 4? boxInit.direction - 2: boxInit.direction + 2;
				chess.style.transform ="rotate("+deg+"deg)";
				break;
			default:
				break;
		}
	}
	// 面向direction 并向当前方向前进一步
	function face(direction) {
		switch(direction) {
			case 'left':
				while(boxInit.direction != 4) {
					turn('left');
				}
				stepForward(boxInit.direction);
				break;
			case 'right':
				while(boxInit.direction != 2) {
					turn('left');
				}
				stepForward(boxInit.direction);
				break;
			case 'bottom':
				while(boxInit.direction != 3) {
					turn('right');
				}
				stepForward(boxInit.direction);
				break;
			case 'top':
				while(boxInit.direction != 1) {
					turn('left');
				}
				stepForward(boxInit.direction);
				break;
			default:
				break;
		}
	}
}
