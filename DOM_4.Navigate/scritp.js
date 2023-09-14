/*4.1) Select the last chidl of the <ol> and put it first*/
const section1 = document.querySelector('section');
const section1OL = section1.lastElementChild.previousElementSibling;
//selecting the <ol> tag
console.log(section1OL);


const ol1st = section1OL.firstElementChild;
const olLast = section1OL.lastElementChild;

//selecting first and last child
console.log(ol1st);
console.log(olLast);


section1OL.insertBefore(olLast,ol1st);
//placing last child befor first child
console.log(section1OL);

/*4.2)Move the <h2> of the third section to the second, and the second to the third  */

const sect2 = section1.nextElementSibling
const sect3 = section1.nextElementSibling.nextElementSibling;

//selecting the sections
console.log(sect2);
console.log(sect3);

const sect2H2 = sect2.firstElementChild;
const sect3H2 = sect3.firstElementChild.firstElementChild;

//select the sections's H2 
console.log(sect2H2);
console.log(sect3H2);

//swhitching second and third sections's <h2> positions:
sect2.insertBefore(sect3H2,sect2H2);
sect3.insertBefore(sect2H2,sect3.firstElementChild);


/*4.3)Delete last section from the DOM*/

const main = document.querySelector('main');
//child.remove(parent);
sect3.remove(main);

