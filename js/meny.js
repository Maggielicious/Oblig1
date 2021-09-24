document.getElementById("label_foretter").addEventListener("click", visForetter);
document.getElementById("label_hovedretter").addEventListener("click", visHovedretter);
document.getElementById("label_dessert").addEventListener("click", visDessert);
document.getElementById("visAlleMenyene").addEventListener("keydown", visAlleMenyene);  
document.getElementById("visAlleMenyene").addEventListener("click", visAlleMenyene);  

function visForetter() {
    document.getElementById("hovedretter").style.display = "none";
    document.getElementById("dessert").style.display = "none";
    document.getElementById("foretter").style.display = "table";
}

function visHovedretter() {
    document.getElementById("dessert").style.display = "none";
    document.getElementById("foretter").style.display = "none";
    document.getElementById("hovedretter").style.display = "table";
}

  function visDessert() {
    document.getElementById("hovedretter").style.display = "none";
    document.getElementById("foretter").style.display = "none";
    document.getElementById("dessert").style.display = "table";
}

function visAlleMenyene() {
    document.getElementById("foretter").style.display = "table";
    document.getElementById("hovedretter").style.display = "table";
    document.getElementById("dessert").style.display = "table";
}