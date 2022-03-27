import React from 'react'
import { useEffect, useState } from 'react';
import './searchResults.css'
import CollectionCard from './collectionCard'
const { shuffleArray } = require('@advikguptadev/basic-function');

const SearchResults = ({punks, term}) => {
    const [ allPunks, setallPunks ] = useState(punks);

    useEffect(() => {
        const newPunks = punks.filter((punk) => {
            return punk.name.toLowerCase().includes(term) 
        })
        console.log(newPunks)
        setallPunks(shuffleArray(newPunks))
    }, [punks, term])
    

    return (
        <div className="searchResults">
            {allPunks.map(punk => (
                <div>
                    <CollectionCard
                        id={punk.token_id}
                        name={punk.name}
                        traits={punk.traits}
                        image={punk.image_preview_url}
                        key={punk.token_id}
                    />
                </div>
            ))}
        </div>
    )
}

export default SearchResults;