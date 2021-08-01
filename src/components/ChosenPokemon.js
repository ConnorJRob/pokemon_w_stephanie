import React from 'react';

const ChosenPokemon = ({selectedPokemon, addToFavourites}) => {

    if (!selectedPokemon){
        return null
    }

    return (
        <div className='chosen-selectedPokemon'>
            <h4>{selectedPokemon.name}</h4>
            <p>{selectedPokemon.url}</p>
            <button onClick={()=> addToFavourites(selectedPokemon)}>Add to Favourites</button>
        </div>
    )
};

export default ChosenPokemon;