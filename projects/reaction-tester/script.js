var clickedTime;
var createdTime;

function getRandomColor() 
{
	var hexArray = '0123456789ABCDEF'.split('');
	var color;
	var backgroundColor = "#E8E8E8"

	do
	{
		color = '#';

		for (var i = 0; i < 6; i++) 
		{
			color += hexArray[Math.round(Math.random() * 15)];
		}

	} while (color == backgroundColor);

	return color;
}

function makeBox(){
	var setCircle = Math.round(Math.random());
	var size = Math.random() * 300 + 20;
	var top = Math.random() * 40 + 20;
	var left = Math.random() * 70;
	var object = document.getElementById("box");

	object.style.display = "block";
	object.style.width = size + "px";
	object.style.height = size + "px";
	object.style.top = top + "%";
	object.style.left = left + "%";
	object.style.backgroundColor = getRandomColor();

	if (setCircle == 1) 
	{
		object.style.borderRadius = size / 2 + "px";
	} else {
		object.style.borderRadius = 0;
	}

	createdTime = Date.now();
}

function setColor() {
	var color = getRandomColor();
	document.getElementById("box").style.backgroundColor = color;
}

function delay() {
	var randomTime = Math.random() * 2500; 

	setTimeout(function(){
		makeBox();
	}, randomTime)
}

function setTime(){
	var time = (clickedTime - createdTime) / 1000;
	document.getElementById("time").innerHTML = time;
}

document.getElementById("box").onclick = function() {
	this.style.display = "none";
	clickedTime = Date.now();
	setTime();
	delay();
}

makeBox();







