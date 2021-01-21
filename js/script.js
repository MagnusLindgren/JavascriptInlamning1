// TODO
// JSkod för sifferinputs fönstret
// JSkod för blogginlägg
// maxlängd för edits?

window.onload = function(){
    document.getElementById("inputNumber").oninput = function(){
        let inputNumber = parseInt(this.value);
        console.log(inputNumber); // För test
    }
    
    makeEditable(edit);
}

function makeEditable(elem){
    elem.onclick = function(){
        elem.contentEditable = true;
        elem.focus();
    }
}