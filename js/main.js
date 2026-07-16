//menu mobile**
const btn = document.querySelector(".menu-hamburguer");
const menu = document.querySelector(".navbar");

btn.addEventListener("click", () => {
    btn.classList.toggle("ativo");
    menu.classList.toggle("ativo");
});

//esse é o bloco do terminal**
const mensagens = [
    "$ cat notes.md",
    "Nem toda ideia nasce pronta.",
    "Algumas precisam de café.",
    "Outras, de tereré.",
    "",

    "$ git log --oneline",
    "feat: transformar ideias em código",
    "fix: aprender com os próprios erros",
    "refactor: melhorar um pouco todos os dias",
    "",

    "$ npm run portfolio",
    "✔ carregando criatividade...",
    "✔ carregando dedicação...",
    "✔ carregando curiosidade...",
    "",

    "$ git push origin main",
    "Obrigado por visitar meu portfólio.",
    "$"
];

const boardText = document.getElementById("board-text");

let linhaAtual = 0; //digita a primeira linha
let letraAtual = 0; //posição da letra na linha

let textoCompleto = "";

function digitar() {

    const mensagem = mensagens[linhaAtual];

    if (letraAtual < mensagem.length) {

        textoCompleto += mensagem.charAt(letraAtual);

        boardText.textContent = textoCompleto;

        letraAtual++;

        setTimeout(digitar, 40 + Math.random() * 60);

    } else {

        textoCompleto += "\n";

        boardText.textContent = textoCompleto;

        linhaAtual++;

        letraAtual = 0;

        if (linhaAtual < mensagens.length) {

            setTimeout(digitar, 350);

        } else {

            setTimeout(reiniciarTerminal, 3000);   
        }
    } 
}

digitar();

function reiniciarTerminal() {

    textoCompleto = ""; //esvazia o terminal

    linhaAtual = 0; //volta pra primeira linha

    letraAtual = 0; //volta pra primeira letra da primeira linha

    boardText.textContent = ""; //limpa o <p> na tela

    digitar(); //começa tudo novamente
}


//efeito dos cards**
// a luz quando o mouse passa nos cards de habilidades
const cards = document.querySelectorAll(".skill-card");

cards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;

        const y = event.clientY - rect.top;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);

    }); 

});




//ano dinâmico do footer**
document.getElementById("year").textContent = new Date().getFullYear();


        