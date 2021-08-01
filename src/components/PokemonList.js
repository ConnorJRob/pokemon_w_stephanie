import React from 'react';
import PokemonListItem from './PokemonListItem.js'

const PokemonList = ({pokemon}) => {

    const PokemonListItems = pokemon.map((pokemon,index) => {
        return(
            <PokemonListItem pokemon={pokemon} key={index}/>
        )

    });

    return(
        <>
        <p>This is the list</p>
        <ul>
        {PokemonListItems}
        </ul>
        </>
    )
};

export default PokemonList;