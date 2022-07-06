/*Funções para aparecer as tabelas quando clicar*/ 
function showTableCons(){
    var tableCons = document.querySelector(".tb-cons");
    var seta = document.querySelector(".material-symbols-outlined");

    tableCons.classList.toggle("on");
    seta.classList.toggle("on");
}
function showTableAcoes(){
    var tableAcoes = document.querySelector(".tb-acao");

    tableAcoes.classList.toggle("on");
}
function showTableFii(){
    var tableFii = document.querySelector(".tb-fii");

    tableFii.classList.toggle("on");
}
function showTableCripto(){
    var tableCripto = document.querySelector(".tb-cripto");

    tableCripto.classList.toggle("on");
}
function showAdd(){
    var menuAdd = document.querySelector(".add-menu");

    menuAdd.classList.toggle("on");
}