import React, { useState, useEffect } from 'react'

const PokemonAPI = () => {
    const [pokemonList, setPokemonList] = useState([]);

    const fetchAPI = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response =>response.json())
            .then(response => setPokemonList(response.results))
            .catch(error => console.log(error))
    }

    return (
        <div>
            <button onClick={() => fetchAPI()}>Fetch Pokemon</button>
            <ul>
                {
                    pokemonList
                        ? pokemonList.map((pokemon, idx) => <li key={idx}>{pokemon.name}</li>)
                        : <p>&nbsp;</p>
                }
            </ul>
        </div>
    )
}

export default PokemonAPI
