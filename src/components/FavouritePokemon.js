import React from 'react';

const FavouritePokemon = ({pokemon}) => {


    const favPokemon = pokemon.filter(pokemon => pokemon.favourite)

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
        </>
    )
};

export default FavouritePokemon;