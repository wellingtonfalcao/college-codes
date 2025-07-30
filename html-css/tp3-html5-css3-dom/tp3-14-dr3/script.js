const texto = document.getElementById("texto");
const span = document.getElementById("nome");
texto.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        span.textContent = texto.value;
        texto.value = "";
    }
});