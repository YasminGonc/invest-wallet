const btnMenuAdd = document.querySelector('.add-menu');
//Mostrar e ocultar menu adicionar
document.querySelector('#add').addEventListener('click', () => {
    btnMenuAdd.classList.add('on');
});

document.querySelector('#close').addEventListener('click', () => {
    btnMenuAdd.classList.remove('on');
});

const selectElement = document.querySelector('#options');

selectElement.addEventListener('change', () => {
    const options = document.querySelector('#options');
    const indiceAtivo = options.selectedIndex;
    const tipoAtivo = options[indiceAtivo];

    if (tipoAtivo.value == 'acao' || tipoAtivo.value == 'fii' || tipoAtivo.value == 'cripto') {//Mostrar inputs de acordo com o tipo do ativo
        document.querySelector('#input-ativo').style.display = 'flex';
        document.querySelector('#input-qtd').style.display = 'flex';
        document.querySelector('#input-valor').style.display = 'flex';
        document.querySelector('#input-data').style.display = 'flex';
        document.querySelector('#adic').style.display = 'block';
        document.querySelector('#input-dividendos').style.display = 'none';

    } else if (tipoAtivo.value == 'dividendos') {
        document.querySelector('#input-ativo').style.display = 'flex';
        document.querySelector('#input-qtd').style.display = 'none';
        document.querySelector('#input-valor').style.display = 'none';
        document.querySelector('#input-dividendos').style.display = 'flex';
        document.querySelector('#input-data').style.display = 'flex';
        document.querySelector('#adic').style.display = 'block';

    } else {
        document.querySelector('#input-ativo').style.display = 'none';
        document.querySelector('#input-qtd').style.display = 'none';
        document.querySelector('#input-valor').style.display = 'none';
        document.querySelector('#input-data').style.display = 'none';
        document.querySelector('#adic').style.display = 'none';
        document.querySelector('#input-dividendos').style.display = 'none';
    }

});

const form = document.querySelector('#form');
const valorAportado = document.querySelector('#aportado');
let ativoArray = /*JSON.parse(localStorage.getItem('ativoArray')) ||*/[];

form.addEventListener('submit', (evento) => {
    evento.preventDefault(); //no refresh
    const ativo = evento.target.elements['ativo'];
    const qtd = evento.target.elements['qtd'];
    const valor = evento.target.elements['valor'];
    const dividendos = evento.target.elements['dividendos'];
    const data = evento.target.elements['data'];

    const itemAdicionado = {
        //'tipoAtivo': tipoAtivo.value,
        'ativo': ativo.value,
        'qtd': Number(qtd.value),
        'valor': valor.value,
        'dividendos': dividendos.value,
        'data': data.value
    }

    ativoArray.push(itemAdicionado);

    options.value = options[0];
    ativo.value = "";
    qtd.value = "";
    valor.value = "";
    dividendos.value = "";
    data.value = "";

    //localStorage.setItem('ativoArray', JSON.stringify(ativoArray));

    console.log(ativoArray);

    function getTotal(sumValor, item) {
        return sumValor + (Number(item.valor) * Number(item.qtd));
    }

    let sumValor = ativoArray.reduce(getTotal, 0); //colocar em um array para conseguir aproveitar para as outras p??ginas

    console.log(sumValor);

    valorAportado.innerHTML = `<span>R$</span> ${sumValor}`; 
});


//Autocomplete
let ativo = ["ITSA4", "PSSA3", "BBDC4", "NVDC34", "BBAS3"];
let sortedAtivos = ativo.sort();

let input = document.querySelector("#ativo");

input.addEventListener("keyup", (e) => {
    //Apaga todos os itens caso o usu??rio apague ou adicione novas letras
    removeElements();
    //Loop no array
    for (let i of sortedAtivos) {
        //converte o input em min??sculo e compara com o array
        if (i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value != "") {
            //caso verdadeiro cria o elemnto li
            let listItem = document.createElement("li");
            // lis criados v??o ter a mesma classe
            listItem.classList.add("list-items");
            listItem.style.cursor = "pointer";
            listItem.setAttribute("onclick", "displayAtivos('" + i + "')");
            //partes iguais em bold
            let word = "<b>" + i.substr(0, input.value.length) + "</b>";
            word += i.substr(input.value.length);
            //Mostra o valor no array
            listItem.innerHTML = word;
            document.querySelector(".list").appendChild(listItem);
        }
    }
});
function displayAtivos(value) {
    input.value = value;
    removeElements();
}
function removeElements() {
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
        item.remove();
    });
}
