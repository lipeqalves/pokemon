let btnPokemom = document.querySelector("#btn-pokemon");
let nome = document.querySelector("#nome-pokemon");
let id = document.querySelector("#id-pokemon");
let movimentoPokemon = document.querySelector("#movimento-pokemon");
let habilidadePokemom = document.querySelector("#habilidade-pokemon");
let imgPokemom = document.querySelector("#img-pokemon");
let img = document.createElement("img");

btnPokemom.addEventListener('click', function(e){
    e.preventDefault();
    let nomePokemon = document.querySelector('#pokemon').value.toLowerCase();
    let req = `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`;

    requisicao(req);
})

function requisicao(urls){ // faz a requisição
    $.ajax({
        method: "GET",
        url: urls,
        dataType: "json",

        success:function(result){
           // console.log(result);
            buscaObjeto(result);
        }
      });
}
function buscaObjeto(result){    //faz a busca das propriedades do personagem
    nome.textContent =`Nome: ${result.name} `;
    id.textContent =`ID:  ${result.id}` ;   
    movimentoPokemon.textContent = `Movimeto: ${result.moves[0].move.name}`;
    habilidadePokemom.textContent = `Habilidade: ${result.abilities[0].ability.name}`;
    img.src = `${result.sprites.front_default}`;
    imgPokemom.appendChild(img);
}





/*$("#btn-pokemon").on("click", function(){    
    let nomePokemon = $("#pokemon").val();
    let site = `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`
    $.ajax({
        method: "GET",
        url: site,
        dataType: "json",
        success:function(result){
            console.log(result);
            $("#nome-pokemon").html(`Nome: ${result.name}  <br> ID:  ${result.id}`)
            $("#habilidade-pokemon").html(`Movimeto: ${result.moves[0].move.name} <br> Habilidade: ${result.abilities[0].ability.name}`)
            $("#img-pokemon").html(`<img src="${result.sprites.front_default}">`)
        }
      });  
})*/