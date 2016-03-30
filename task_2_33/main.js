

window.onload=function(){
    chessboardReady();
    var boxInit = {
		"x": Math.floor(Math.random() * 10) + 1,
		"y": Math.floor(Math.random() * 10) + 1,
		direction: 1,
		"boxWidth": document.getElementsByClassName('box')[0].offsetWidth,
	}
	boxInit.setPosition = function() {
		document.getElementById('chess').style.top = this.y * this.boxWidth + "px";
		document.getElementById('chess').style.left = this.x * this.boxWidth + "px";
	}
    
    
    boxInit.setPosition();
    document.getElementById('btn').addEventListener('click', btnGo);
    document.getElementById('btnLeft').addEventListener('click', turnLeft);
    document.getElementById('btnRight').addEventListener('click', turnRight);
    document.getElementById('btnBack').addEventListener('click', turnBack);

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
		switch(order.trim().toLowerCase()) {
			case "go":
				stepForward();
				break;
			case "tun lef":
				turnLeft();
				break;
			case "tun rig":
				turnRight();
				break;
			case "tun bac":
				turnBack();
				break;
			default:
				break;
		}
	}

	//向前一步
	function stepForward() {
		switch (boxInit.direction) {

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

	//向左转
	function turnLeft() {
		boxInit.direction = boxInit.direction-1 > 0 ? (boxInit.direction - 1): 4;
		changeFace();
	}

	//向右转
	function turnRight() {
		boxInit.direction = boxInit.direction+1 <5 ? boxInit.direction + 1: 1;
		changeFace();
	}

	//向后转
	function turnBack() {
		boxInit.direction = boxInit.direction + 2 > 4? boxInit.direction - 2: boxInit.direction + 2;
		changeFace();

	}

	function changeFace(){
		switch (boxInit.direction) {
			case 1:
				document.getElementById('chess').style.transform ="rotate(0deg)";
				break;
			case 4:
				document.getElementById('chess').style.transform ="rotate(-90deg)";
				break;
			case 2:
				document.getElementById('chess').style.transform ="rotate(90deg)";
				break;
			case 3:
				document.getElementById('chess').style.transform ="rotate(180deg)";
				break;
			default:
				break;
		}
			
	}


}
