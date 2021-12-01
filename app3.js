function getFaveColor(){
let mainstyle = "black";
var favoriteColor = prompt("Please Input your favorite color");
while (favoriteColor !== mainstyle) {
favoriteColor = prompt("You've chosen the wrong color. Please try again. Hint: all the colors combined");
}
// if (favoriteColor == mainstyle){
//     document.write("You've chosen the right color!");
// }
// else {
//     favoriteColor = prompt("Please enter the right color");
//     getFaveColor();
// }
}

function showPrayerHands(){
    let handNumber = prompt("How many prayers do you need today?");
    let number = 0;
    for (let i = 0; i < handNumber; i++) {
    let url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcZjOPZougl-vMGY5s2MjeOa1ee701FYzXIkih5mfBN5JfY77aq02kxODiDtsNjvoY7X8&usqp=CAU";
    number = number + 1;
    document.write('<h4><img id="picture" src="' + url +'">' + " " + number + '</h4>');
    }
}
    