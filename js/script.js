/*  
    Vad jag gjort för att felsöka och undvika buggar
    Jag har använt mig av console.log för att spåra och se till att mina variablar
    får just det värde jag vill att det ska få. Jag har följt vad som händer i 
    webbläsarens konsolfönster för att se att rätt värde sätts in i variabeln. 

    Jag har också använt mig av "stepthrough" debugging i webbläsaren för att se 
    vart det går snett när det har gått snett.

    Min förebyggning av buggar är väl mest att jag har byggt allt steg för steg 
    och kollat om det fungerar för varje steg med hjälp av bland annat console.log.
*/

/*
    Här har jag eventet onload som jag använder för att köra igång mina functioner.
    onload väntar med att köra tills allt på sidan är inladdat och klart innan det kör 
    till skillnad mot  DOMContentLoaded som kör när DOM är färdigladdat. 
*/
window.onload = function(){
    document.getElementById("inputNumber").oninput = function(){
        let inputNumber = parseInt(this.value);
        // Ta bort alla poster
        removeBlogBox();
        // Skapar nya poster enligt vilket värde som är angett i parametern
        createBlogBox(inputNumber);       
    }
}

//funktion för att göra ett element redigerbart
/*  
    onclick här är ett event. När man klickar i det valda området (väljs via parametern) så gör det
    elementet redigerbart. 
*/
function makeEditable(box){
    box.onclick = function(){
        box.contentEditable = true;
        box.focus();
    }
}

// Funktion för att skapa bloggposter
function createBlogBox(input){
    for (let i = 0; i < input; i++) {
        //Skapa alla element
        let main = document.querySelector("main");
        let section = document.createElement("section");
        let title = document.createElement("h4");
        let paragraph = document.createElement("p");

        let button = document.createElement("button"); // Sparknapp

        //Skriv ut temp text i boxen
        title.innerText = "BlogPost " + (i+1);
        paragraph.innerText = "Write your text here.";

        button.innerText = "Save";

        //Gör boxen redigerbar
        makeEditable(title);
        makeEditable(paragraph);

        //Skapa allt på sidan. 
        /*
            append lägger till node object i föräldren man specificerar.
            förälder.append(objektet man lägger till).
            Som i "section.append(title)" så skapar den en h4 (Jag skapade let title ovan som en h4) i section.
        */ 
        section.append(title);
        section.append(paragraph);
        section.append(button)
        main.append(section);

        // Lägg till CSS
        /*
            Här lägger jag till styling från CSS filen till objekt jag skapat ovan
            Exempel:
            section.classList.add("textbox") här lägger jag till klassen textbox till section
        */
        section.classList.add("textbox");
        button.classList.add("button");
    }
}

// Ta bort blogposter
function removeBlogBox(){
    let sections = document.querySelectorAll("section");
    for (let i = 0; i < sections.length; i++){
        sections[i].remove();
    }   
}

// Testkod för att spara det man redigerat
let button = document.querySelectorAll("button");
button.onclick = function (){
    let editElem = document.getElementById("textBox"); // kanske behöver mer specifikt
    let userEdited = editElem.innerHTML;

    localStorage.userEdits = userEdited;
}

// Kolla om edits finns i locaStorage
function checkEdits(){
    if(localStorage.userEdits != null)
    document.getElementById("textBox").innerHTML = localStorage.userEdits;
}