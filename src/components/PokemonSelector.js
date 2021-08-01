import React from 'react';

const PokemonList = ({pokemon, onPokemonSelected}) => {

    const handleChange = event => {
        onPokemonSelected(event.target.value)
    }


    return(
        <>
        <select onChange={handleChange}>
            <option selected disabled>Choose Pokemon</option>
            {pokemon.map(pokemon => {
                return(
                    <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
                )})
            }
        </select>
        </>
    )
};

export default PokemonList;