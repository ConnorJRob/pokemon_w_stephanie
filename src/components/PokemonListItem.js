import React from 'react';

const PokemonListItem = ({pokemon}) => {

    return(
        <option value={pokemon}>{pokemon.name}</option>  
        
    )
};

export default PokemonListItem;