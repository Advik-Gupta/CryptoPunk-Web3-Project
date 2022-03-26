import React from 'react'
import './punkList.css'
import CollectionCard from './collectionCard.jsx'

const PunkList = ({punkListData, setselectedPunk, list, setselectedList}) => {
  return (
    <div className='punkList' onClick={() => setselectedList(list)} >
        {punkListData.map(punk => (
            <div onClick={() => setselectedPunk(punk.token_id)} >
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

export default PunkList