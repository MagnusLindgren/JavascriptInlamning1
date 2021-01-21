// TODO
// JSkod för sifferinputs fönstret
// JSkod för blogginlägg
// maxlängd för edits?

window.onload = function(){
    let editable = document.getElementById("edit");

    makeEditable(edit);
}

function makeEditable(elem){
    elem.onclick = function(){
        elem.contentEditable = true;
        elem.focus();
    }
}