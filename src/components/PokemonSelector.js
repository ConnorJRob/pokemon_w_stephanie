import React from 'react';
// import PokemonListItem from './PokemonListItem.js'

const PokemonList = ({pokemon, onPokemonSelected}) => {

    const handleChange = event => {
        onPokemonSelected(event.target.value)
    }

    // const PokemonListItems = pokemon.map((pokemon,index) => {
    //     return(
    //         <PokemonListItem pokemon={pokemon} key={index}/>
    //     )

    // });

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