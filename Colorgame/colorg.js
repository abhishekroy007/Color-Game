var colors=generateRanColor(numOsqrs);
var squares= document.querySelectorAll(".square");

var h=document.querySelector("h1");
var pikColor=pikCol();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#eas");
var hardBtn=document.querySelector("#har");
var numOsqrs=6;

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numOsqrs=3
	colors=generateRanColor(numOsqrs);
	pikColor=pikCol();
	colorDisplay.textContent=pikColor;
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor = colors[i];

		}
		else{
			squares[i].style.display="none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	colors=generateRanColor(6);
	pikColor=pikCol();
	colorDisplay.textContent=pikColor;
	for(var i=0;i<squares.length;i++)
	{
		
			squares[i].style.backgroundColor = colors[i];

		
		
			squares[i].style.display="block";
			}
});

resetButton.addEventListener("click", function() {
	//generate all new colors
	colors = generateRanColor(numOsqrs);
	//pick a new random color from array
	pikColor = pikCol();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pikColor;

	this.textContent="New Colors";

    messageDisplay.textContent="";

	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h.style.background = "steelblue";
});


colorDisplay.textContent=pikColor;

for(var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		console.log(clickedColor,pikColor)
		if(clickedColor === pikColor)
		{
			messageDisplay.textContent="Correct";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h.style.backgroundColor=clickedColor;
		}
		else{
			this.style.backgroundColor="#232323";
			var a="Try Again";
			messageDisplay.textContent=a;

		}
	});
}

function changeColors(color){
	for(var i=0; i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}
function pikCol(){
	var rand=Math.floor(Math.random()*colors.length);
	return colors[rand];
}
function generateRanColor(num){
	var arr=[];
    for(var i=0;i<num;i++)
    {
       arr.push(randColor());
    }



	return arr;
}
function randColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);

    return "rgb("+r + ", "+g+", "+b+")";

}