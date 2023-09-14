//function to generate random color (see exercice 4)
function RfntColor() { 
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let RfntColor = "rgb(" + x + "," + y + "," + z + ")";
  
   return RfntColor;
    }


/*
Selectors.
1) Add a title attribute to every element with an "important" class.
*/
var imp = document.querySelectorAll('.important');
for (var i=0; i < imp.length; i++) {
   imp[i].setAttribute('title','This is an important object');
}

/*
Selectors.
2) Select all img tags and loop throught. If there is no important classe: display: none.
*/

const picture = document.querySelectorAll('img');
for (const childPic of picture) {
   if (childPic.className !== "important"){
    childPic.style.display = 'none';
   }
}

/*
Selectors.
3) Loop through all paragraphs: display in the console.
*  Display the class if it has one.
*/
const paraph = document.querySelectorAll('p');
for (const pcontent of paraph){
    console.log(pcontent.innerText);
    if (pcontent.className){
        console.log("The class of this paragraph is called : "+ pcontent.className + ".");
    } else if (pcontent.id){ /*it's a bonus*/
        console.log("The id of this paragraph is called : "+ pcontent.id + ".");
    } else{//Exercice 4: changing font color
        pcontent.style.color = RfntColor();
        console.log("The color font of the paragraph is : " + RfntColor());
    }
}
/*
Selectors.
4) Give all paragraph a random color, unless it has a class.
* @returns fntColor ( see up above)
*/





