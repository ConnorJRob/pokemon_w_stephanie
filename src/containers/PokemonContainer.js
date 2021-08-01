import React, {useState, useEffect} from 'react';
import PokemonSelector from '../components/PokemonSelector';
import FavouritePokemon from '../components/FavouritePokemon';
import ChosenPokemon from '../components/ChosenPokemon';

const PokemonContainer = () => {

    const [pokemon, setPokemon] = useState([]);
    const [selectedPokemonIdName, setSelectedPokemonIdName] = useState('');
    const [favouritePokemon, setFavouritePokemon] = useState([]);

    useEffect(() => {
        getPokemon();
    }, []);
    
    const getPokemon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
        .then(response => response.json())
        .then(pokemonData => setPokemon(pokemonData.results))
        .catch(err => console.error);
    };

    // const onPokemonClick = (pokemon) => {
    //     setSelectedPokemon(pokemon)
    // };

    const handlePokemonSelected = (pokemonName) => {
        setSelectedPokemonIdName(pokemonName)
    };
    
    const addToFavourites = (pokemon) => {
        setFavouritePokemon([...favouritePokemon, pokemon])
    }

    const selectedPokemon = pokemon.find(pokemon => pokemon.name === selectedPokemonIdName);
    console.log(selectedPokemon)

    return(
        <div>
            <h2>This is the container for our pokemon app!</h2>
            <FavouritePokemon favouritePokemon={favouritePokemon} pokemon={pokemon}/>
            <ChosenPokemon selectedPokemon={selectedPokemon} addToFavourites={addToFavourites}/>
            <PokemonSelector pokemon={pokemon} onPokemonSelected={handlePokemonSelected}/>
        </div>
    )
};

export default PokemonContainer;