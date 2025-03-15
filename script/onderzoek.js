// import * as d3 from "https://cdn.skypack.dev/d3@7";


//Elementen van de DOM
const htmlElement = document.querySelector('html');
const vlaggen = document.querySelectorAll('nav li img');

//de taal waarmee de pagina opent
let taal = htmlElement.lang;

//init functie, dat de headers intialissert in de opgegeven taal 
//en voor ieder onderzoeksproject een list item aanmaakt
//@Param: myTaal, de taal waarmee de pagina opent
function initPage(myTaal) {
    let myTeksten = alleTeksten.filter(d => d.taal == myTaal);

    htmlElement.lang = myTaal;

    d3.select("main>header")
        .selectAll("h2")
        .data(myTeksten)
        .join("h2")
        .text(d => d.kopje);

    // d3.select("main>header>h2")
    //     .data(myTeksten)
    //     //"onderzoek" in de juiste taal
    //     .text(d => d.kopje);


    d3.select("main>ol")
        .selectAll("li")
        .data(myTeksten[0].projecten)
        //array met de teksten van alle projecten in de juiste taal
        .join("li")
        .attr("id", d => d.projectCode)
        //d is één object met alle teksten bij één project
        .append("h3")
        .text(d => { initOmschrijvingen(d); addPublicaties(d.projectCode); return d.tijd });

}

//hulpfunctie voor initPage voor de omschrijvingen van projecten (omdat ik niet hou van anonieme functies)
//Voegt tekst toe aan de list items.
//@param: myProject: object met de teksten voor één project in één taal
function initOmschrijvingen(myProject) {
    let mySelector = "#" + myProject.projectCode;

    d3.select(mySelector)
        .append("section")
        .append("h3")
        .text(d => { return d.project })

    d3.select(mySelector)
        .select("section")
        .append("p")
        .attr("class", "omschrijving")
        .text(d => { return d.omschrijving });

}
//hulpfunctie voor initPage voor de publicaties (omdat ik niet hou van anonieme functies)
//functie die gegeven de projectcode, de publicaties toevoegt bij dat project
//@param: myProjectcode: projectCode bij het project. De omschrijving van de publicaties is taalonafhankelijk
function addPublicaties(myProjectCode) {

    let mySelector = "#" + myProjectCode;
    let myPublicaties = allePublicaties.filter(d => d.projectCode == myProjectCode)[0].publicaties;

    d3.select(mySelector + ">section")
        .selectAll("article")
        .data(myPublicaties)
        .join("article")
        .text(d => "~" + d.artikel)

}

//eventHandler voor het klikken op de vlaggen
//wijzigt alle teksten van de pagina naar teksten in de opgegeven taal
//@param: myTaal: de gekozen taal
function changeTaal(myTaal) {

    let myTeksten = alleTeksten.filter(d => d.taal == myTaal);
    // myTeksten bevat een Array met één object, nl. de teksten in de gekozen taal

    let myProjectTeksten = myTeksten[0].projecten;

    htmlElement.lang = myTaal;

    d3.select("main>header>h2")
        .data(myTeksten)
        .text(d => d.kopje);

    d3.select("main>ol")
        .selectAll("main>ol>li>h3")
        .data(myTeksten[0].projecten)
        .join("main>>ol>li>h3")
        .text(d => { console.log(myTeksten[0].projecten); updateProjectTeksten(d); return d.tijd });
}

//hulpfunctie voor changeTaal (omdat ik niet hou van anonieme functies)
//wijzigt de taal van kopje en omschrijving van de projectteksten.
//@param: myProject: object met de teksten voor één project in één taal
function updateProjectTeksten(myProject) {
    let mySelector = "#" + myProject.projectCode;
    let kopjeSelector = mySelector + ">section>h3";
    let omschrijvingSelector = mySelector + ">section>p"

    document.querySelector(kopjeSelector).textContent = myProject.project;
    document.querySelector(omschrijvingSelector).textContent = myProject.omschrijving;
}

initPage(taal);

vlaggen.forEach(vlag => vlag.addEventListener("click", function (e) { changeTaal(e.target.lang) }))

