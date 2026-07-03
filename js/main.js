const btn = document.querySelector(".menu-hamburguer");
const menu = document.querySelector(".navbar");

btn.addEventListener("click", () => {
    btn.classList.toggle("ativo");
    menu.classList.toggle("ativo");
});


//ano dinâmico onde não preciso editar quando chegar outros anos
document.getElementById("year").textContent = new Date().getFullYear();


