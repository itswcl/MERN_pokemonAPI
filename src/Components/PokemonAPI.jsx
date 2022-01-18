import React, { useState, useEffect } from 'react'

const PokemonAPI = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [display, setDisplay] = useState(false);
    const [count, setCount] = useState(1);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => response.json())
            .then(response => {
                setCount(count + 1)
                setPokemonList(response.results)})
            .catch(error => console.log(error))
        console.log(`Fetch ${count} times`)
    }, [display])

    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Fetch Pokemon</button>
            <ul>
                {
                    display
                        ? pokemonList.map((pokemon, idx) => <li key={idx}>{pokemon.name}</li>)
                        : <p>&nbsp;</p>
                }
            </ul>
        </div>
    )
}

export default PokemonAPI
