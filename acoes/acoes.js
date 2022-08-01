const acaoAtivo = document.querySelectorAll(".ativo");
const tabelaAtico = document.querySelectorAll(".acoes-tabela");

for(let i = 0; i < acaoAtivo.length; i++) {
    acaoAtivo[i].addEventListener('click', () => {
        tabelaAtico[i].classList.toggle('on');
    });
}
console.log(acaoAtivo);

/*for(let i = 0; i < acaoAtivo.length; i++) {
    acaoAtivo[i].addEventListener('click', () => {
        tabelaAtico[i].classList.toggle('on');
    });
}
console.log(acaoAtivo);

acaoAtivo[0].addEventListener('click', () => {
    tabelaAtico[0].classList.toggle('on');
});


*/