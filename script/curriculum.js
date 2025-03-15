// import * as d3 from "https://cdn.skypack.dev/d3@7";


//Elementen van de DOM
const htmlElement = document.querySelector('html');
const vlaggen = document.querySelectorAll('nav li img');

//de taal waarmee de pagina opent
let taal = htmlElement.lang;

//init functie, dat de headers intialiseert (Werkervaring, opleiding en talenkennis)in de opgegeven taal 
//en voor ieder onderdeel een list item aanmaakt
//@Param: myTaal, de taal waarmee de pagina opent
function initPage(myTaal) {
    let myTeksten = cv.filter(d => d.taal == myTaal);
    //myTeksten is een Array met één element

    console.log(myTeksten[0].taal);

    htmlElement.lang = myTaal;

    d3.select("main>ul")
        .selectAll("li")
        .data(myTeksten[0].onderdelen)
        //array met de teksten van alle onderdelen van het cv in de juiste taal: werkervaring, opleiding, talen
        .join("li")
        .attr("id", d => d.code)
        .append("h2")
        //d is een object. Representeert één baan  
        .text(d => { initOnderdelen(d); return d.kopje })

}

//hulpfunctie voor initPage om een lijst aan te maken voor werkervaring, opleiding of talen (omdat ik niet hou van anonieme functies)
//vult de lijst met de banen, diplomas of talen.
//@param: myAchievements: array met de teksten van de lijst in één taal
function initOnderdelen(myAccomplishment) {
    let mySelector = "#" + myAccomplishment.code;
    let myAchievements = myAccomplishment.resultaten;

    d3.select(mySelector)
        .append("ol")
        .selectAll("ol>li")
        .data(myAchievements)
        .join("li")
        .attr("id", d => d.code)
        .append("h3")
        .text(d => { addAchievement(d); return d.titel + ":" });
    // d is het object met de gegevens voor één baan resp. diploma of taal 

}

//hulpfunctie voor initOnderdelen. Voegt de omschrijving toe voor een baan, opleiding of taal
//functie die gegeven het object met de gegevens voor één baan resp. diploma of taal, deze afbeeldt
//@param: myAchievement: object met de gegevens voor één baan resp. diploma of taal
function addAchievement(myAchievement) {

    let mySelector = "#" + myAchievement.code;

    d3.select(mySelector)
        .append("section")
        .append("h3")
        .text(myAchievement.instituut);

    d3.select(mySelector + ">section")
        .append("p")
        .text(myAchievement.omschrijving)
    // .append("p")
    // .attr("class", 'scriptie')
    // .text(myAchievement.scriptie);

}

//eventHandler voor het klikken op  vlaggen
//wijzigt de teksten van de pagina naar teksten in de opgegeven taal
//@param: myTaal: de gekozen taal
function changeTaal(myTaal) {

    let myTeksten = cv.filter(d => d.taal == myTaal);

    htmlElement.lang = myTaal;

    d3.select("main>ul")
        .selectAll("li>h2")
        .data(myTeksten[0].onderdelen)
        //array met de teksten van alle onderdelen van het cv in de juiste taal: werkervaring, opleiding, talen
        //d is een object. Representeert één baan / diploma / taal  
        .text(d => { updateAchievements(d); return d.kopje })

}

function updateAchievements(myAccomplishment) {
    let myAchievements = myAccomplishment.resultaten
    console.log(myAchievements)

    myAchievements.forEach(d => {
        document.querySelector('#' + d.code + '>h3').textContent = d.titel + ":";
        document.querySelector('#' + d.code + '>section>h3').textContent = d.instituut;
        document.querySelector('#' + d.code + '>section>p').textContent = d.omschrijving;
    })

}

initPage(taal);

vlaggen.forEach(vlag => vlag.addEventListener("click", function (e) { changeTaal(e.target.lang) }))

