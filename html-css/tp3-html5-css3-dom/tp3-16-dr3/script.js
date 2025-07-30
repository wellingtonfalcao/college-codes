const lista = document.getElementById("lista");

lista.addEventListener("click", () => {
    const elementos = lista.querySelectorAll("li");
    elementos.forEach(elemento => {
        if (elemento.textContent === "Acre") {
            elemento.innerText = "Amapá";
            elemento.style.backgroundColor = "blue";
        }
    });
});