import React from 'react';

const FavouritePokemon = ({pokemon}) => {


    const favPokemon = pokemon.filter(pokemon => pokemon.favourite)
    // const pickPokemon = FavouritePokemon.map((pokemon) =>{
    //     return <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
    // });

    return (
        <>
        <p>Favourite Pokemon</p>
        <ul>
            {favPokemon.map(pokemon => {
                return (
                    <li key={pokemon.name}>
                        <p> {pokemon.name}</p>
                    </li>
                )})}
        </ul>
        {/* <select onChange={FavouritePokemon}>
            <option selected disable>Favourite Pokemon</option>
            {pickPokemon}
            </select> */}
        </>
    )
};

export default FavouritePokemon;