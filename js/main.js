const btn = document.querySelector(".menu-hamburguer");
const menu = document.querySelector(".navbar");

btn.addEventListener("click", () => {
    btn.classList.toggle("ativo");
    menu.classList.toggle("ativo");
});


// array com as mensagens que serão exibidas na plaquinha
// o js vai mostrar uma mensagem de cada vez
const mensagens = [
    "Bem-vindo(a) ao meu portfólio!",
    "Futura desenvolvedora front-end apaixonada por criar experiências digitais incríveis e criativas.",
    "Muito curiosa e sempre em busca de aprender coisas novas.",
    "git commit -m 'sempre buscando evoluir e melhorar minhas habilidades.'",
];

const boardText = document.getElementById("board-text");

let index = 0;
// exibe a primeira mensagem 
boardText.textContent = mensagens[index];

setInterval(() => {
    index = (index + 1) % mensagens.length;
    boardText.textContent = mensagens[index];
}, 5000); // a cada 5 segundos, o js vai executar a função que está dentro do setInterval







//ano dinâmico onde não preciso editar quando chegar outros anos
document.getElementById("year").textContent = new Date().getFullYear();


