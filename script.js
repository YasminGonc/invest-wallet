//Mostrar tabelas
const btnDropDown = document.querySelectorAll('.btn-dropdowntable');

for (let i = 0; i < btnDropDown.length; i++) {
    const classe = btnDropDown[i].classList[1];
    const idTable = `#tb-${classe}`;

    btnDropDown[i].onclick = function () {
        showTable(idTable);
    }
}

function showTable (idElemento) {
    document.querySelector(idElemento).classList.toggle('on');
}

//Mostrar e ocultar menu adicionar
document.querySelector('#add').addEventListener('click', () => {
    document.querySelector('.add-menu').classList.toggle('on');
});

document.querySelector('#close').addEventListener('click', () => {
    document.querySelector('.add-menu').classList.toggle('on');
});

//Mostrar inputs de acordo com o tipo do ativo
let tipoAtivo = document.querySelector('#options').selectedIndex;
let nomeAtivo = document.querySelector('#options')[tipoAtivo].value;

if (nomeAtivo == 'acao' || nomeAtivo == 'fii' || nomeAtivo == 'cripto') {
    document.querySelector('#input-ativo').style.display = 'flex';
    document.querySelector('#input-qtd').style.display = 'flex';
    document.querySelector('#input-valor').style.display = 'flex';
    document.querySelector('#input-data').style.display = 'flex';
    document.querySelector('#adic').style.display = 'block';

} else if (nomeAtivo == 'dividendos') {
    document.querySelector('#input-dividendos').style.display = 'flex';
    document.querySelector('#input-data').style.display = 'flex';
    document.querySelector('#adic').style.display = 'block';
    
}

//Autocomplete
let ativo = ["ITSA4", "PSSA3", "BBDC4", "NVDC34", "BBAS3"];
let sortedAtivos = ativo.sort();

let input = document.querySelector("#ativo");

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




//Preencher array com botão submit form.addEventListener('submit', função ())const valueTipoAtivo = tipoAtivo