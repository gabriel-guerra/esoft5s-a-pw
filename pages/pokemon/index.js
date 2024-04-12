document.addEventListener('DOMContentLoaded', function () { 
  getLocalObject()
  getSearchParams()
})

function getSearchParams() {
  // Early return -> Caso location search, não faz nada.
  if (!location.search && location.pathname === '/pages/pokemon') {
    return
  }

  updateCount();
  let accessInfo = JSON.parse(localStorage.getItem("accessInfo"));
  createP(accessInfo.count, accessInfo.lastVisit);
  
  if (location.search){
    // URLSearchParams é uma classe que facilita a manipulação de query strings
    const urlSearchParams = new URLSearchParams(location.search)

    // Pegando o valor do parâmetro name
    const pokemonName = urlSearchParams.get('name')

    changePageTitle(`Pagina do ${pokemonName}`)
    getPokemonData(pokemonName)
  }
}


function changePageTitle(title) {
    document.title = title
}
  
function generateInfoSection(src, pokemonName) {
  const h2 = document.createElement('h2')
  h2.id = "info-pokemon-label"
  h2.textContent = `Informações sobre ${pokemonName}`

  const img = document.querySelector('img')
  img.src = src
  img.id = 'img-change'
  img.alt = `Imagem do pokemon ${pokemonName}`

  const section = document.querySelector('#info-pokemon')

  section.appendChild(h2)
  section.appendChild(img)
}

async function getPokemonData(name) {
  // fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  //   .then((fetchData) => {
  //     return fetchData.json()
  //   })
  //   .then((jsonData) => generateInfoSection(jsonData.sprites.front_default, name))
  //   .catch((error) => console.error(error))

  try {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)

    const jsonData = await data.json()

    generateInfoSection(jsonData.sprites.front_default, name)
  } catch (error) {
    console.error(error)
  }
}

function getLocalObject(){

  if (!localStorage.getItem("accessInfo")){
    object = {
      count: 0, 
      lastVisit: `01/01/1900, 00:00`
    }
  
    localStorage.setItem("accessInfo", JSON.stringify(object));  
  }

  return JSON.parse(localStorage.getItem("accessInfo"));

}

function createP(count, lastVisit){
  const footer = document.querySelector("footer");

  const p = document.createElement("p");
  p.textContent = `Esta página foi visitada ${count} vezes. A última visita foi: ${lastVisit}`;

  footer.appendChild(p);

}

function updateCount(){

  let counter = JSON.parse(localStorage.getItem("accessInfo")).count;
  counter++;

  let dateFormat = Intl.DateTimeFormat("pt-BR", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric"
    }).format(new Date());

  let object = {
    count: counter, 
    lastVisit: `${dateFormat}`
  }

  localStorage.setItem("accessInfo", JSON.stringify(object));

}

document.querySelector("#img-change").addEventListener('click', () => {

});