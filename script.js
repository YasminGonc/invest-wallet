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
//Funções para autocomplete
let ativo = ["ITSA4", "PSSA3", "BBDC4", "NVDC34", "BBAS3"];
let sortedAtivos = ativo.sort();

let input = document.querySelector("#input");

input.addEventListener("keyup", (e) => {
    //Apaga todos os itens caso o usuário apague ou adicione novas letras
    removeElements();
    //Loop no array
    for(let i of sortedAtivos){
        //converte o input em minúsculo e compara com o array
        if (i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value != ""){
            //caso verdadeiro cria o elemnto li
            let listItem = document.createElement("li");
            // lis criados vão ter a mesma classe
            listItem.classList.add("list-items");
            listItem.style.cursor = "pointer";
            listItem.setAttribute("onclick", "displayAtivos('" + i +"')");
            //partes iguais em bold
            let word = "<b>" + i.substr(0, input.value.length) +"</b>";
            word += i.substr(input.value.length);
            //Mostra o valor no array
            listItem.innerHTML = word;
            document.querySelector(".list").appendChild(listItem);
        }
    }
});
function displayAtivos(value){
    input.value = value;
    removeElements();
}
function removeElements(){
    let items = document.querySelectorAll(".list-items");
     items.forEach((item) => {
        item.remove();
     });
}