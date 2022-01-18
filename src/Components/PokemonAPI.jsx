import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PokemonAPI = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [display, setDisplay] = useState(false);
    const [count, setCount] = useState(1);

    // fetch method with useEffect
    // useEffect(() => {
    //     fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    //         .then(response => response.json())
    //         .then(response => {
    //             setCount(count + 1)
    //             setPokemonList(response.results)})
    //         .catch(error => console.log(error))
    //     console.log(`Fetch ${count} times`)
    // refetch when display change by click
    // }, [display])

    // axios
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => setPokemonList(response.data.results))
            .then(response => {
                if (display) {
                    setCount(count + 1);
                    console.log(`Fetch ${count} times`)
                }
            })
            .catch(error => console.log(error))
        },[display])

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
