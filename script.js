
//alert("workigng!!!!!");
var randomno1 =Math.floor(Math.random()*6)+1;//befor adding 1 it will give random number between 0-5.99, after adding 1 it will give random number between 1-6
var randomimage="dice" +randomno1+ ".png";
var imagesrc="images/"+randomimage;

var newimage=document.querySelectorAll("img")[0];
newimage.setAttribute("src",imagesrc);




var randomno2 =Math.floor(Math.random()*6)+1;//befor adding 1 it will give random number between 0-5.99, after adding 1 it will give random number between 1-6
var randomimage="dice" +randomno2+ ".png";
var imagesrc="images/"+randomimage;

var newim=document.querySelectorAll("img")[1];
newim.setAttribute("src",imagesrc);


if(randomno1===randomno2)
{
    document.querySelector("h1").innerHTML="Please refresh,It's a DRAW !!!! ";
    document.querySelector("h2").innerHTML="Best Score is "+randomno1;
}
else if(randomno1>randomno2){
    document.querySelector("h1").innerHTML="Player 1 won!!!!! 🚩";
    document.querySelector("h2").innerHTML="Best Score is "+randomno1;
}
else{
    document.querySelector("h1").innerHTML="Player 2 won!!!! 🚩";
    document.querySelector("h2").innerHTML="Best Score is "+randomno2 ;

}





