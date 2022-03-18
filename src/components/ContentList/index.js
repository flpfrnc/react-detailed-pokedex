import { useRef, useEffect, useState } from "react";
import { getAllPokemon, getPokemon } from "../../services/pokemon";
import Card from "../Card/Card";
import { PokemonContainer } from "./contentlist.styled";


export default function ContentList() {
  const pokemonContainer = useRef(null)
  const [pokemonData, setPokemonData] = useState([])
  const [nextUrl, setNextUrl] = useState([])
  const [prevUrl, setPrevUrl] = useState([])
  const [loading, setLoading] = useState([])
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon?offset=35&limit=35'

  useEffect(() => {
    async function fetchData() {
      //receiving all data from the main endpoint (initialUrl)
      let response = await getAllPokemon(initialUrl); 

      // saving previous and next endpoints
      setNextUrl(response.next); 
      setPrevUrl(response.previous); 
      console.log(response)
      let pokemon = await loadingPokemon(response.results); 
      
      // changing setLoanding() to false, because data has already been loaded
      setLoading(false); 
    }
    fetchData();
  }, []);

  const next = async () => {
    setLoading(true);
    let data = await(getAllPokemon(nextUrl))
    await loadingPokemon(data.results)
    setNextUrl(data.next)
    setPrevUrl(data.previous)
    setLoading(false)
  }

  const previous = async () => {
    if (!prevUrl) { return };
    setLoading(true);
    let data = await(getAllPokemon(prevUrl))
    await loadingPokemon(data.results)
    setNextUrl(data.next)
    setPrevUrl(data.previous)
    setLoading(false)
  }

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url);
      return pokemonRecord
    }))

    setPokemonData(_pokemonData)
  };
  console.log(pokemonData)

  return (
    <div>
      { loading ? <h1>Loading...</h1> : (
        <>
            <div className="btn__group" style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
              <button className="btn previous__Pokemon" onClick={previous}>Prev</button> 
              <button className="btn next__Pokemon" onClick={next}>Next</button>
            </div>
            <PokemonContainer>
            {pokemonData.map((pokemon, index) => {          
              return <Card key={index} pokemon={pokemon}/>            
            })}
          </PokemonContainer>
        </>
      )}
    </div>
  )
}