import React from 'react';

const ChosenPokemon = ({selectedPokemon, handleFavouriteToggle}) => {

    if (!selectedPokemon){
        return null
    };

    const handleClick = () => {
        handleFavouriteToggle(selectedPokemon.name)
    };

    const favButtonText = selectedPokemon.favourite ? 'Remove from Favourites' : 'Add to Favourites'

    return (
        <div className='chosen-selectedPokemon'>
            <h4>{selectedPokemon.name}</h4>
            <p>{selectedPokemon.url}</p>
            <button onClick={handleClick}>{favButtonText}</button>
        </div>
    )
};

export default ChosenPokemon;