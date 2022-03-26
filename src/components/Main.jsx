import React from 'react'
import './Main.css'
import { useEffect, useState } from 'react';
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'

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