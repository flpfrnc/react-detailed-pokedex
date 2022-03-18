export async function getAllPokemon(url){
    return new Promise((resolve, reject) => {
        fetch(url)
          .then(response => response.json())
          .then(allpokemon => {
              resolve(allpokemon);
          })        
    })
}

export async function getPokemon(url){
    return new Promise((resolve, reject) => {
        fetch(url)
          .then(response => response.json())
          .then(eachpokemon => {
              resolve(eachpokemon);
          })        
    })
}