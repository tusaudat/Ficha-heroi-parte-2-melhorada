
document.addEventListener("DOMContentLoaded", function () {

    const grupos = document.querySelectorAll(
        ".atributos, .nivel-habilidade"
    );

    grupos.forEach(function (grupo) {

        const slider = grupo.querySelector('input[type="range"]');
        const output = grupo.querySelector("output");
        const progress = grupo.querySelector("progress");

        if (!slider || !output || !progress) {
            console.error("Erro ao localizar os elementos:", grupo);
            return;
        }

        function atualizarMedidor() {

            const valor = Number(slider.value);
            const maximo = Number(slider.max);

            output.value = valor;
            output.textContent = valor;

            progress.max = maximo;
            progress.value = valor;
        }

        slider.addEventListener("input", atualizarMedidor);
        slider.addEventListener("change", atualizarMedidor);

        atualizarMedidor();

    });


let nivel = 1;
let xp = 0;
const xpNecessario = 100;
const xpPorClique = 20;

const botaoXP = document.getElementById("botao-xp");
const nivelPersonagem = document.getElementById("nivel-personagem");
const xpAtual = document.getElementById("xp-atual");
const xpMaximo = document.getElementById("xp-maximo");
const barraXP = document.getElementById("barra-xp");


function atualizarXP() {

    nivelPersonagem.textContent = nivel;
    xpAtual.textContent = xp;
    xpMaximo.textContent = xpNecessario;

    barraXP.max = xpNecessario;
    barraXP.value = xp;
}


function aumentarAtributos() {

    const atributos = document.querySelectorAll(
        ".avatar .atributos"
    );

    atributos.forEach((atributo) => {

        const controle = atributo.querySelector(".controle");
        const valor = atributo.querySelector("output");
        const progresso = atributo.querySelector(".barra-progresso");

        let novoValor = Number(controle.value);

        if (novoValor < 10) {
            novoValor++;
        }

        controle.value = novoValor;
        valor.textContent = novoValor;

        if (progresso) {
            progresso.value = novoValor;
        }

    });
}


botaoXP.addEventListener("click", function() {

    xp += xpPorClique;

    if (xp >= xpNecessario) {

        nivel++;

        
        xp = 0;


        aumentarAtributos();

        alert("Parabéns! Você subiu para o nível " + nivel + "!");

    }

    atualizarXP();

});

atualizarXP();
});

const botaoVerMais = document.getElementById("botao-ver-mais");

const secoesOcultas = document.querySelectorAll(".secao-oculta");

botaoVerMais.addEventListener("click", function () {

    const estaAberto = botaoVerMais.classList.contains("ativo");

    secoesOcultas.forEach(function (secao) {
        secao.classList.toggle("visivel", !estaAberto);
    });

    botaoVerMais.classList.toggle("ativo");

    if (estaAberto) {
        botaoVerMais.innerHTML =
            'Ver mais <i class="fa-solid fa-chevron-down"></i>';
    } else {
        botaoVerMais.innerHTML =
            'Ver menos <i class="fa-solid fa-chevron-up"></i>';
    }

});