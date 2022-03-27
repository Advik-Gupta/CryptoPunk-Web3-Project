import React from 'react'
import './Main.css'
import { useEffect, useState } from 'react';
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import eth from '../assets/eth.png'

const Main = ({selectedPunk, punkListData}) => {
    const [ activePunk, setactivePunk ] = useState(punkListData[0]);

    useEffect(() => {
        punkListData.map((punk, idx) => {
            if (punk.token_id === selectedPunk) {
                setactivePunk(punkListData[idx])
            }
        })
    }, [punkListData, selectedPunk])
    

    return (
        <div className="main">
            <div className="mainContent">
                <div className="punkHighlight">
                    <div className="punkContainer">
                        <img className='selectedPunk' src={activePunk.image_preview_url} alt="" />
                    </div>
                </div>
                <div className="punkDetails" style={{color: '#fff'}}>
                    <div className="title">
                        {activePunk.name}<span className="itemNumber"> ● #{activePunk.token_id} </span>
                        <div className="priceContainer collectionContainer">
                            <div className="price"><span className='infoType'>Asset Type - </span> {activePunk.asset_contract.asset_contract_type.toUpperCase()}</div>      
                        </div>
                        <div className="priceContainer collectionContainer">
                            <div className="price"><span className='infoType'>Created At - </span> {activePunk.asset_contract.created_date.slice(0,10)}</div>      
                        </div>
                        <div className="priceContainer collectionContainer">
                            <div className="price"><span className='infoType'>Collection - </span> {activePunk.asset_contract.symbol}</div>      
                        </div>
                        <div className="priceContainer">
                            <div className="price"><span className='infoType'>Current Price - </span> </div>
                            <div className="price">{activePunk.traits[0]?.value}</div>
                            <img src={eth} className="ethImage" alt="" />
                        </div>
                    </div>
                    <div className="owner">
                        <div className="ownerImageContainer">
                            <img src={activePunk.owner.profile_img_url} alt="" />
                        </div>
                        <div className="ownerDetails">
                            <div className="ownerNameAndHandle" style={{color: '#fff'}}>
                                <div>{activePunk.owner.address}</div>
                                <div className='ownerHandle'>@advikguptadev</div>
                            </div>
                            <div className="socials">
                                <div className="ownerLink">
                                    <img src={instagramLogo} alt="" />
                                </div>
                                <div className="ownerLink">
                                    <img src={twitterLogo} alt="" />
                                </div>
                                <div className="ownerLink">
                                    <img src={moreIcon} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;