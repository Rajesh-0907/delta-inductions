var bold = document.getElementById("bold");
var italic = document.getElementById("italic");
var output = document.getElementById("output");
var undo = document.getElementById("undo");

bold.onclick = function(){

document.execCommand("bold", false, null);
};

italic.onclick = function(){

document.execCommand("italic", false, null);
};

undo.onclick = function(){

document.execCommand("undo", false, null);
};

