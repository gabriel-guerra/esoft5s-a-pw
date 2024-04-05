
async function main() {
    let evolucao = new URLSearchParams(document.location.search).get("evolucao");
    document.querySelector("#title").textContent = "Página do " + evolucao;

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${evolucao}`);
    const imageUrl = await res.json().then((response) => { 
        return response.sprites.front_default 
    });

    const image = document.createElement("img");
    image.src = imageUrl;
    image.alt = "Imagem do " + evolucao;

    const h3 = document.createElement("h3");
    h3.textContent = "Informações sobre " + evolucao;

    document.querySelector("#pokemon-card").appendChild(h3);
    document.querySelector("#pokemon-card").appendChild(image);
    
}

main();

