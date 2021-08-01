import React, {useState, useEffect} from 'react';

const PokemonContainer = () => {

    const [pokemon, setPokemon] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    useEffect(() => {
        getPokemon();
    }, []);
    
    const getPokemon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
        .then(response => response.json())
        .then(pokemonData => setPokemon(pokemonData.results))
        .catch(err => console.error);
    }

    return(
        <h2>This is the container for our pokemon app!</h2>
    )
};

export default PokemonContainer;