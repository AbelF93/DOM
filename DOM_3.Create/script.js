/*
Create.
1.1) Create a new <section> with random background-color for each learner in your group. 
1.2) It has to contain a paragraph with the name of the learner. 
1.3) Thoses sections have to be appendend in the <article>.
2) If the background is black: text appear in white.
3) The order of element changes randomly.
*/

// constant array of learners;
const arrLrn = ["Abel", "Alexandra", "Anthony","Benjamin","Bruno","Delphine",
"Emilien","Ethan","Ismaël","Jodie","Louka","Loïc","Luciano","Marine","Nikko",
"Noa","Steve","Sylvain","Thomas","Willy"];

// constants to lock the article and reorganise randomly the Learners's Array.
const articleLearners = document.querySelector('article');
const randomLearners = arrLrn.sort(() => Math.random() - 0.5);

//this function apply all the changes to each section dedicated to an array element.
randomLearners.forEach((arrLrn) => { 
    // we create constances for each tags: <section>,<p>,text-node.
    const sectLearner = document.createElement('section');
    const paraphLearner = document.createElement('p');
    const node = document.createTextNode(arrLrn);

    // we specify for theses const the child element.
    paraphLearner.appendChild(node);
    sectLearner.appendChild(paraphLearner);
    articleLearners.appendChild(sectLearner);

    // random background color function.
    function random_bg_color() {
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        let bgColor = "rgb(" + x + "," + y + "," + z + ")";
        sectLearner.style.backgroundColor = bgColor;
    }   

    // Here, we modify thoses sections through css
    random_bg_color(); 
    sectLearner.style.padding = "20px 10px";
    sectLearner.style.margin = "10px 200px";
    sectLearner.style.borderRadius = "5px 0px";
    sectLearner.style.display = "flex";
    sectLearner.style.justifyContent ="center";
    
    // Here, we modify the paragraphs through css
    paraphLearner.style.justifyContent ="center";
    paraphLearner.style.font = "Garamond";
    paraphLearner.style.fontSize = "1.5em";

    /*This if it's an event
    sectLearner.addEventListener('mouseenter',() => sectLearner.style.color="white");
    sectLearner.addEventListener('mouseleave',() => sectLearner.style.color="black");
    */
    
    //Condition if background is black => change the font color in white
    if (random_bg_color() ==  "black"){
        paraphLearner.style.color = "white";
    } 
});

