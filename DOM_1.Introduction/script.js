/*Introduction: Edit the script.js
1.1) Display the document title in the console.
*/
console.log(document.title);
/*
1.2) Change the document title
*/
document.title = "Modifying the DOM";
/*
1.3A) Change Background color

document.body.style.backgroundColor = "#FF69B4"; 

*/
/*
1.3B) Randomly change Background color
*/
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    }

random_bg_color();

/*
1.4) Display every children elements of the 2nd child element
*/
var all = document.body.getElementsByTagName("*");

for (let elem of all) {
    console.log(elem);
    elem += 1;
}