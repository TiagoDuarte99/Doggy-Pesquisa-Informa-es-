var botaoP = document.createElement("button")
var botaoN = document.createElement("button")
botaoP.innerText = "Previous"
botaoN.innerText = "Next"
botaoN.setAttribute("class", "botoes")
botaoN.style.marginLeft = "5px"
botaoP.setAttribute("class", "botoes")
botaoP.style.marginRight = "5px"
document.getElementById("rod").appendChild(botaoP)
document.getElementById("rod").appendChild(botaoN)

var pagina
window.onload = carregar()
function carregar() {
    document.getElementById("caixa").innerHTML = "";
    document.getElementById("rod").style.display = 'flex';
    document.getElementById("rod2").style.display = 'none';
    fetch('http://localhost:3000/dogs?_pagina&_limit=24')
        .then(response => response.json())
        .then(data => {
            botaoP.disabled = true;
            data.forEach(item => {
                carregarCao(item)
            });
            if (data.length == 24)
                botaoN.disabled = false;
            pagina = 1
            paginaPesquisa = 1
            document.getElementById("search-input").value = "";
            document.getElementById("search-input2").value = "";
            menuPequeno.classList.add('d-none');
            caixaGrande.classList.remove('nav');
        });
}

botaoN.addEventListener("click", function Next() {
    document.getElementById("caixa").innerHTML = "";
    pagina++;
    fetch(`http://localhost:3000/dogs?_page=${pagina}&_limit=24`)
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                carregarCao(item)
            });
            if (pagina > 1)
                botaoP.disabled = false;
            if (data.length < 24)
                botaoN.disabled = true;
        });
})

botaoP.addEventListener("click", function Previous() {
    document.getElementById("caixa").innerHTML = "";
    pagina--;
    fetch(`http://localhost:3000/dogs?_page=${pagina}&_limit=24`)
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                carregarCao(item)
            });
            if (pagina < 2)
                botaoP.disabled = true;
            if (data.length === 24)
                botaoN.disabled = false;
        });
})

var botaoP2 = document.createElement("button")
var botaoN2 = document.createElement("button")
botaoP2.innerText = "Previous"
botaoN2.innerText = "Next"
botaoN2.setAttribute("class", "botoes")
botaoN2.style.marginLeft = "5px"
botaoP2.setAttribute("class", "botoes")
botaoP2.style.marginRight = "5px"
document.getElementById("rod2").appendChild(botaoP2)
document.getElementById("rod2").appendChild(botaoN2)

var input = document.getElementById("search-input");
var searchButton = document.getElementById("search-button");
var paginaPesquisa;
var texto;

searchButton.addEventListener("click", function () {
    texto = input.value;
    paginaPesquisa = 1
    if (!texto) {
        window.alert("Por favor, digite algum termo de pesquisa válido");
        return;
    }

    fetch(`http://localhost:3000/dogs?name_like=${texto}&_page=${paginaPesquisa}&_limit=24`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao obter resultados da pesquisa");
            }
            return response.json();
        })
        .then(data => {
            botaoP2.disabled = true;
            botaoN2.disabled = false;
            if (!data.length) {
                document.getElementById("caixa").innerHTML = "";
                document.getElementById("rod").style.display = 'none';
                document.getElementById("rod2").style.display = 'none';
                carregarErro()
                return;
            }

            document.getElementById("caixa").innerHTML = "";
            document.getElementById("rod2").style.display = 'flex';
            document.getElementById("rod").style.display = 'none';
            data.forEach(item => {
                carregarCao(item)
            });
            if (data.length < 24)
                document.getElementById("rod2").style.display = 'none';
        })
        .catch(error => {
            carregarErro();
        });
});

var input2 = document.getElementById("search-input2");
var searchButton2 = document.getElementById("search-button2");

searchButton2.addEventListener("click", function () {
    texto = input2.value;
    paginaPesquisa = 1
    if (!texto) {
        window.alert("Por favor, digite algum termo de pesquisa válido");
        return;
    }

    fetch(`http://localhost:3000/dogs?name_like=${texto}&_page=${paginaPesquisa}&_limit=24`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao obter resultados da pesquisa");
            }
            return response.json();
        })
        .then(data => {
            botaoP2.disabled = true;
            botaoN2.disabled = false;
            if (!data.length) {
                document.getElementById("caixa").innerHTML = "";
                document.getElementById("rod").style.display = 'none';
                document.getElementById("rod2").style.display = 'none';
                carregarErro()
                return;
            }

            document.getElementById("caixa").innerHTML = "";
            document.getElementById("rod2").style.display = 'flex';
            document.getElementById("rod").style.display = 'none';
            data.forEach(item => {
                carregarCao(item)
            });
            if (data.length < 24)
                document.getElementById("rod2").style.display = 'none';
        })
        .catch(error => {
            carregarErro();
        });
});

input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        searchButton.click();
    }
});

input2.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        searchButton2.click();
    }
});

botaoN2.addEventListener("click", function Next2() {
    document.getElementById("caixa").innerHTML = "";
    paginaPesquisa++;
    fetch(`http://localhost:3000/dogs?name_like=${texto}&_page=${paginaPesquisa}&_limit=24`)
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                carregarCao(item)
            });
            if (paginaPesquisa > 1)
                botaoP2.disabled = false;
            if (data.length < 24)
                botaoN2.disabled = true;
        });
})

botaoP2.addEventListener("click", function Previous2() {
    document.getElementById("caixa").innerHTML = "";
    paginaPesquisa--;
    fetch(`http://localhost:3000/dogs?name_like=${texto}&_page=${paginaPesquisa}&_limit=24`)
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                carregarCao(item)
            });
            if (paginaPesquisa < 2)
                botaoP2.disabled = true;
            if (data.length === 24)
                botaoN2.disabled = false;
        });
})

function carregarCao(item) {
    var divmae = document.createElement("div")
    var div = document.createElement("div");
    var p = document.createElement("p");
    var img = document.createElement("img")
    var a = document.createElement("a")
    var icon = document.createElement("i")
    var div2 = document.createElement("div");
    var detalhe = document.createElement("details");
    var sumario = document.createElement("summary");

    img.src = item.image.url;
    p.innerHTML = item.name;
    icon.setAttribute("class", "fa-solid fa-download")
    sumario.innerText = "More info"
    detalhe.innerHTML = '<li>' + 'Temperament: ' + item.temperament + '</li><li>'
        + 'Bred for: ' + item.bred_for + '</li>' + '</li><li>'
        + 'Life span : ' + item.life_span + '</li>' + '</li><li>'
        + 'Breed group: ' + item.breed_group + '</li><li>'
        + 'Height: ' + item.height.metric + 'cm' + '</li><li>'
        + 'Weight: ' + item.weight.metric + 'kg' + '</li>';

    divmae.setAttribute("class", "col-6 col-sm-6 col-md-4 col-lg-3")
    divmae.style.padding = "10px"

    div.style.borderRadius = "10px"
    div.style.padding = "0px"
    div.style.border = "1px solid rgb(176, 176, 176)";
    div.style.overflow = "hidden";

    div2.style.clear = "both";

    a.href = "#"
    a.style.float = "right";

    icon.style.marginBottom = "15px"
    icon.style.marginRight = "15px"

    detalhe.setAttribute("class", "details")
    sumario.setAttribute("class", "summary")

    a.appendChild(icon)
    icon.addEventListener("click", function () {
        window.open(item.image.url, "_blank");
        a.style.color = "#db34bc"
    });

    divmae.appendChild(div)
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(a)
    div.appendChild(div2)
    detalhe.appendChild(sumario)
    div2.appendChild(detalhe)
    document.getElementById("caixa").appendChild(divmae)
}

function carregarErro() {
    var div1 = document.createElement("div");
    var h1 = document.createElement("h1");
    var icon = document.createElement("i")
    var h2 = document.createElement("h1");

    h1.innerText = "Nothing to show here :/"
    icon.setAttribute("class", "fa-sharp fa-solid fa-shield-dog")
    h2.innerText = "0 results"

    div1.style.marginTop = "20px"
    div1.style.textAlign = "center"

    icon.style.fontSize = "100px"

    div1.appendChild(h1)
    div1.appendChild(icon)
    div1.appendChild(h2)

    document.getElementById("caixa").appendChild(div1)
}

var menu = document.getElementById("menu")
var menuPequeno = document.getElementById("menuPequeno")
var caixaGrande = document.getElementById("caixa")

menu.addEventListener('click', function () {
    menuPequeno.classList.toggle('d-none');
    caixaGrande.classList.toggle('nav');
});

window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
        menuPequeno.classList.add('d-none');
        caixaGrande.classList.remove('nav');
    }
});