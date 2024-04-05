
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

    document.querySelector("body").appendChild(image);
    console.log(image);
}

main();

