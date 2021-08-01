import React, {useState, useEffect} from 'react';
import PokemonSelector from '../components/PokemonSelector';
import FavouritePokemon from '../components/FavouritePokemon';
import ChosenPokemon from '../components/ChosenPokemon';

const PokemonContainer = () => {

    const [pokemon, setPokemon] = useState([]);
    const [selectedPokemonIdName, setSelectedPokemonIdName] = useState('');
    useEffect(() => {
        getPokemon();
    }, []);
    
    const getPokemon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
        .then(response => response.json())
        .then(pokemonData => setPokemon(pokemonData.results))
        .catch(err => console.error);
    };

    const handlePokemonSelected = (pokemonName) => {
        setSelectedPokemonIdName(pokemonName)
    };
    
    const handleFavouriteToggle = (pokemonName) => {
        const updatedPokemon = pokemon.map((pokemon) => {
            if (pokemon.name === pokemonName) {
                pokemon.favourite = !pokemon.favourite
            }
            return pokemon
        })
        setPokemon(updatedPokemon)
    };

    const selectedPokemon = pokemon.find(pokemon => pokemon.name === selectedPokemonIdName);
    console.log(selectedPokemon)

    return(
        <div>
            <h2>This is the container for our pokemon app!</h2>
            <FavouritePokemon pokemon={pokemon}/>
            <ChosenPokemon selectedPokemon={selectedPokemon} handleFavouriteToggle={handleFavouriteToggle}/>
            <PokemonSelector pokemon={pokemon} onPokemonSelected={handlePokemonSelected}/>
        </div>
    )
};

export default PokemonContainer;