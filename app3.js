let mainstyle = "black";
var favoriteColor = prompt("Please Input your favorite color");
if (favoriteColor == mainstyle){
    document.write("Please reload page and choose a new color");
}
else {
    document.getElementbyID("slh").style.color = favoriteColor;
}