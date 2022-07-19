//Mostrar e ocultar menu adicionar
document.querySelector('#add').addEventListener('click', () => {
    document.querySelector('.add-menu').classList.toggle('on');
});

document.querySelector('#close').addEventListener('click', () => {
    document.querySelector('.add-menu').classList.toggle('on');
});

//Mostrar inputs de acordo com o tipo do ativo
var selectElement = document.querySelector('#options');
const form = document.querySelector('#form');
let ativoArray = [];

selectElement.addEventListener('change', (evento) => {
    var tipoAtivo = document.querySelector('#options').selectedIndex;
    var nomeAtivo = document.querySelector('#options')[tipoAtivo].value;

    if (nomeAtivo == 'acao' || nomeAtivo == 'fii' || nomeAtivo == 'cripto') {
        document.querySelector('#input-ativo').style.display = 'flex';
        document.querySelector('#input-qtd').style.display = 'flex';
        document.querySelector('#input-valor').style.display = 'flex';
        document.querySelector('#input-data').style.display = 'flex';
        document.querySelector('#adic').style.display = 'block';

    } else if (nomeAtivo == 'dividendos') {
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
    
    function enviar(nomeAtivo, ativoValue, qtdValue, valorValue, dividendosValue, dataValue) {
        ativoArray.push({
            nomeAtivo: nomeAtivo,
            ativoValue: ativoValue,
            qtdValue: qtdValue,
            valorValue: valorValue,
            dividendosValue: dividendosValue,
            dataValue: dataValue
        });
    }
    
    form.addEventListener('submit', (e) => {
        e.preventDefault(); //no refresh
        const ativoValue = document.querySelector('#ativo').value;
        const qtdValue = Number(document.querySelector('#qtd').value);
        const valorValue = Number(document.querySelector('#valor').value);
        const dividendosValue = Number(document.querySelector('#input-dividendos').value);
        const dataValue = document.querySelector('#data').value;
        enviar(nomeAtivo, ativoValue, qtdValue, valorValue, dividendosValue, dataValue)
        console.log(ativoArray);
    });
    
});


//Autocomplete
let ativo = ["ITSA4", "PSSA3", "BBDC4", "NVDC34", "BBAS3"];
let sortedAtivos = ativo.sort();

let input = document.querySelector("#ativo");

input.addEventListener("keyup", (e) => {
    //Apaga todos os itens caso o usuário apague ou adicione novas letras
    removeElements();
    //Loop no array
    for (let i of sortedAtivos) {
        //converte o input em minúsculo e compara com o array
        if (i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value != "") {
            //caso verdadeiro cria o elemnto li
            let listItem = document.createElement("li");
            // lis criados vão ter a mesma classe
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
//Preencher array com botão submit form.addEventListener('submit', função ())const valueTipoAtivo = tipoAtivo



//submit, chama enviar

/*function enviar() {
    if (nomeAtivoValue == 'acao') {
        formAcao = [
            {
                nomeAtivo: ativoValue,
                qtd: qtdValue,
                valor: valorValue,
                data: dataValue
            }
        ]
    } else if (nomeAtivoValue == 'fii') {
        var formFii = [
            {
                nomeAtivo: ativoValue,
                qtd: qtdValue,
                valor: valorValue,
                data: dataValue
            }
        ]
    } else if (nomeAtivoValue == 'cripto') {
        var formCripto = [
            {
                nomeAtivo: ativoValue,
                qtd: qtdValue,
                valor: valorValue,
                data: dataValue
            }
        ]
    } else if (nomeAtivoValue == 'dividendos') {
        var formDividendos = [
            {
                nomeAtivo: ativoValue,
                qtd: qtdValue,
                dividendos: dividendosValue,
                data: dataValue
            }
        ]
    }


}*/

