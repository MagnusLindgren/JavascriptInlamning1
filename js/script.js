// TODO
// JSkod för sifferinputs fönstret
// JSkod för blogginlägg
// maxlängd för edits?

window.onload = function(){
    document.getElementById("inputNumber").oninput = function(){
        let inputNumber = parseInt(this.value);
        removeBlogBox();
        console.log(inputNumber); // För test
        createBlogBox(inputNumber);
    }
    
    makeEditable(edit);
}

//funktion för att göra ett element redigerbart
function makeEditable(box){
    box.onclick = function(){
        box.contentEditable = true;
        box.focus();
    }
}

function createBlogBox(input){
    for (let i = 0; i < input; i++) {
        //Skapa alla element
        let main = document.querySelector("main");
        let section = document.createElement("section");
        let title = document.createElement("h4");
        let paragraph = document.createElement("p");

        //Skriv ut temp text i boxen
        title.innerText = "BlogPost " + (i+1);
        paragraph.innerText = "Write your text here.";

        //Gör boxen editable
        makeEditable(title);
        makeEditable(paragraph);

        //Skapa allt på sidan
        section.append(title);
        section.append(paragraph);
        main.append(section);

        // Lägg till CSS
        section.classList.add("textbox");
    }
}

function removeBlogBox(){
    let section = document.querySelectorAll("section");
    section.remove();
}