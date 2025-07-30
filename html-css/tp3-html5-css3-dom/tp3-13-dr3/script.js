const classes = ["corVerde", "corRoxa", "corLaranja", "corVermelha"];

const btnCriar = document.getElementById("criar");
const novo = document.getElementById("novo");
const containers = document.querySelectorAll(".container");
let caixinhas = document.querySelectorAll("#novo div");
let contador = 1;

btnCriar.addEventListener("click", () => {
    const caixinha = document.createElement("div");
    
    caixinha.id = "caixina" + contador
    contador++;
    
    caixinha.classList.add("caixinha");
    
    const cor = Math.floor(Math.random() * classes.length);
    caixinha.classList.add(classes[cor]);
    caixinha.draggable = "true";
    
    caixinha.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", caixinha.id);              
    });
    
    novo.appendChild(caixinha);
    caixinhas = document.querySelectorAll("#novo div");    
});

containers.forEach(container => {
    container.addEventListener("dragover", (event) => {
        event.preventDefault(); 
    });
    
    container.addEventListener("drop", (event) => {        
        const id = event.dataTransfer.getData("text/plain");
        const caixinhaMovida = document.getElementById(id);
        container.appendChild(caixinhaMovida);       
    });
});