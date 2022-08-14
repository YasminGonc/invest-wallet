const showTable = document.querySelectorAll('.grafico');
const table = document.querySelectorAll('.consolidado');
const arrow = document.querySelectorAll('.fa-solid.fa-angle-down')

for (let i = 0; i < showTable.length; i++) {
    showTable[i].addEventListener('click', () => {
        table[i].classList.toggle('on');
        arrow[i].classList.toggle('rotated');
    });
}

let listaAtivo = JSON.parse(localStorage.getItem('ativoArray'));

const listaFii = listaAtivo.filter(item => item.tipoAtivo == 'fii');
const listaAcao = listaAtivo.filter(item => item.tipoAtivo == 'acao');
const listaCripto = listaAtivo.filter(item => item.tipoAtivo == 'cripto');
const listaBdr = listaAtivo.filter(item => item.tipoAtivo == 'bdr');

const fiiConsolidado = document.querySelector('#fii-consolidado');
const acaoConsolidado = document.querySelector('#acao-consolidado');
const bdrConsolidado = document.querySelector('#bdr-consolidado');
const etfConsolidado = document.querySelector('#etf-consolidado');

const fiiPorcentagem = document.querySelector('#fii-porcentagem');

function updateValues() {
    function getTotal(sumValor, item) {
        return sumValor + (Number(item.valor) * Number(item.qtd));
    }

    let sumFii = listaFii.reduce(getTotal,0);
    let sumAcao = listaAcao.reduce(getTotal,0);
    let sumBdr = listaBdr.reduce(getTotal,0);
    let sumCripto = listaCripto.reduce(getTotal,0);
    let sum = sumFii + sumAcao + sumBdr + sumCripto;

    let percentFii = ((sumFii/sum)*100).toFixed(1);
    let percentAcao = ((sumAcao/sum)*100).toFixed(1); //continuar aqui
    let percentBdr = ((sumBdr/sum)*100).toFixed(1);
    let percentCripto = ((sumCripto/sum)*100).toFixed(1);
    
    console.log(sum);
    console.log(sumFii);
    console.log(((sumFii/sum)*100).toFixed(1));

    fiiPorcentagem.innerHTML = `${percentFii} <span class="valor__moeda">%</span>`;  
    fiiConsolidado.innerHTML = `<span class="valor__moeda">R$</span> ${sumFii}`;
    acaoConsolidado.innerHTML = `<span class="valor__moeda">R$</span> ${sumAcao}`;
    bdrConsolidado.innerHTML = `<span class="valor__moeda">R$</span> ${sumBdr}`;
    etfConsolidado.innerHTML = `<span class="valor__moeda">R$</span> ${sumCripto}`;
}

updateValues();

const tbodyFii = document.querySelector('#tbody-fii');

function preecheTabelaFii() {
    const novaLinha = document.createElement('tr'); //cria a linha da tabela
    tbodyFii.appendChild(novaLinha); //adiciona a linha da tabela no lugar certo 

    const trAtivo = document.createElement('td');
    trAtivo.innerHTML = listaAtivo[0].ativo;
    novaLinha.appendChild(trAtivo); //cria a primeira célula

    const trQuant = document.createElement('td');
    trQuant.innerHTML = listaAtivo[0].qtd;
    novaLinha.appendChild(trQuant); 

    const trPMedio = document.createElement('td');
    trPMedio.innerHTML = listaAtivo[0].qtd; //fazer conta aqui
    novaLinha.appendChild(trPMedio); 

    const trPMedioDesc = document.createElement('td');
    trPMedioDesc.innerHTML = listaAtivo[0].qtd; //fazer conta aqui
    novaLinha.appendChild(trPMedioDesc);

    const preco = document.createElement('td');
    preco.innerHTML = listaAtivo[0].qtd; //dados API
    novaLinha.appendChild(preco);

    const dividendo = document.createElement('td');
    dividendo.innerHTML = listaAtivo[0].qtd; //fazer conta aqui
    novaLinha.appendChild(dividendo);

    const percentual = document.createElement('td');
    percentual.innerHTML = listaAtivo[0].qtd; //fazer conta aqui
    novaLinha.appendChild(percentual);
}

preecheTabelaFii();


/*
Passo1: somar os ativos que são iguais
Passo2: colocar esse ativo na tabela
*/

