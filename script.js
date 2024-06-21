var cachorros = [
    { "nome": "Thor", "imagem": "dog1" },
    { "nome": "Zeca", "imagem": "dog2" },
    { "nome": "Zeus", "imagem": "dog3" },
    { "nome": "Pingo", "imagem": "dog4" }
];
var gatos = [
    { "nome": "Dunga", "imagem": "cat1" },
    { "nome": "Mika", "imagem": "cat2" },
    { "nome": "Conan", "imagem": "cat3" },
    { "nome": "Messi", "imagem": "cat4" }
];
//Selecionar elementos
var animais = document.getElementById('select_animais');
var galeria = document.getElementById('galeria');
var nome = document.getElementById('nome');
//Acionar eventos
animais.addEventListener('input', listarAnimais);
galeria.addEventListener('mouseover', mostrarNome);
galeria.addEventListener('mouseout', limparNome);

function listarAnimais() {
    limparDivGaleria();
    if(animais.value == "dog") {
        for(var i=0; i < cachorros.length; i++) {
            let dog = document.createElement("img");
            dog.src = "./img/" + cachorros[i].imagem + ".jpg";
            dog.alt = cachorros[i].nome;
            galeria.appendChild(dog);
        }
    } 
    else if(animais.value == "cat") {
        for(var i=0; i < gatos.length; i++){
            let cat = document.createElement("img");
            cat.src = "./img/" + gatos[i].imagem + ".jpg";
            cat.alt = gatos[i].nome;
            galeria.appendChild(cat);
        }
    } 
}
function mostrarNome(event) {
    nome.innerText = event.target.alt;
}
function limparNome() {
    nome.innerText = "";
}
function limparDivGaleria() {
    var elemento = document.querySelector("#galeria");
    while(elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
}