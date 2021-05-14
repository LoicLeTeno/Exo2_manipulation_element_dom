// part 1
    // ### 1
let h1 = document.querySelector('h1');
h1.innerText = "Les attibuts class et id";

    // ### 2
let h2_1 = document.querySelectorAll('h2')[0];
h2_1.innerText = "Exercice 2 partie A";

    // ### 3
let h2_2 = document.querySelectorAll('h2')[1];
h2_2.innerText = "Exercice 2 partie B";

    // ### 4
let p_1 = document.querySelectorAll('p')[0];
p_1.innerHTML = "L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b>";

    // ### 5
let p_2 = document.querySelectorAll('p')[1];
p_2.innerHTML = "La manipulation de l'attribut Style peut-être une <i>solution</i> rapide";


// PARTIE 2.1
    // ### 6
h1.id = "bigTitle";

    // ### 7
let div = document.querySelector('div');
div.className = "container";

    // ### 8
let h2_all = document.querySelectorAll('h2');
h2_all.forEach(h2 => {
    h2.className = "title";
});

    // ### 9
let p_all = document.querySelectorAll('p');
p_all.forEach(p => {
    p.className = "text";
});


// PARTIE 2.2
    // ### 10
let section_1 = document.querySelectorAll('section')[0];
section_1.className = "margin-bottom" + " border-black " + "padding";
// section_1.classList.add ("margin-bottom", "border-black", "padding")

    // ### 11
let section_2 = document.querySelectorAll('section')[1];
section_2.className = "margin-top" + " border-black " + "padding";
// section_2.classList.add ('margin-top', 'border-black', 'padding');


    // ### 12
let div_parent_section = document.querySelectorAll('section')[1].querySelector('div');
div_parent_section.setAttribute('style', 'background-color: blue; border: solid 3px red; height: 20px; width: 20px;');
