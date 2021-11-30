function getFaveColor(){
let mainstyle = "black";
var favoriteColor = prompt("Please Input your favorite color");
if (favoriteColor == mainstyle){
    document.write("You've chosen the right color!");
}
else {
    favoriteColor = prompt("Please enter the right color");
    getFaveColor();
}
}