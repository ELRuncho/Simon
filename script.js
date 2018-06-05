var origSeries = [];
var human = [];
var green = document.getElementsByClassName('greenButton')[0];
var red = document.getElementsByClassName('redButton')[0];
var yellow = document.getElementsByClassName('yellowButton')[0];
var blue = document.getElementsByClassName('blueButton')[0];
var onOff= document.getElementById('power');
var strict = document.getElementById('strictSwitch');
var colors=document.querySelector(':root');

	


onOff.onclick=function(){
	var powered=document.getElementById('power').checked;
	if(powered){
		startGame();
	}else{
		origSeries=[];
		human=[];
		removeAlt();
	}
}

function startGame(){
	var game=true;
		do{
		comTurn();
		displayPatern(origSeries);
		removeAlt();
		humanTurn(game);
		game=false;
	}while(game==true);
}

function comTurn(){
	origSeries.push(addNextMove());
}

function addNextMove(){
	var move=Math.floor(Math.random()*4)+1;
	return move;
}

function displayPatern(arr){
	for(var i=0; i<arr.length;i++){
		switch (arr[i]){
			case 1:
				document.getElementById('green').classList.add('greenButtonALt');
				break;
			case 2:
				document.getElementById('red').classList.add('redButtonALt');
				break;
			case 3:
				document.getElementById('yellow').classList.add('yellowButtonALt');
				break;
			case 4:
				document.getElementById('blue').classList.add('blueButtonALt');
				break;
		}
	}
}

function humanTurn(game){
	green.onclick=function(){
		human.push(1); 
		compare(game);
	}
	red.onclick=function(){
		human.push(2);
		compare(game);
	}
	yellow.onclick=function(){
		human.push(3);
		compare(game);
	}
	blue.onclick=function(){
		human.push(4);
		compare(game);
	}
}

function compare(game){
	for (let i=0; i < human.length; i++) {
		if (human[i]!=origSeries[i]) {
			game=false;
			return game;
		}else{
			game=true;
		}
	}
	return game;
}


function removeAlt(){
	document.getElementById('green').classList.remove('greenButtonALt');
	document.getElementById('red').classList.remove('redButtonALt');
	document.getElementById('yellow').classList.remove('yellowButtonALt');
	document.getElementById('blue').classList.remove('blueButtonALt');
}
