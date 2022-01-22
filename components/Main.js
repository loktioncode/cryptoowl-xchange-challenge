
import React, { useState, Fragment, useEffect } from 'react';
import CollectionCard from './CollectionCard';
import Link from 'next/link'
import MainStyle from '../styles/mainStyle.module.css'
import Image from 'next/image'



const Main = (props) => {
    const [activeNft, setActiveNft] = useState(props.nftListData[0])

    useEffect(() => {
        setActiveNft(props.nftListData[props.selectedNft])
    }, [props.nftListData, props.selectedNft])

    return (

        <div className={MainStyle.main}>
            <div className={MainStyle.mainContent}>
                <div className={MainStyle.nftHighlight}>
                    <div className={MainStyle.nftContainer}>
                        <Image
                            className={MainStyle.selectedNft}
                            src={activeNft.image_url} // Route of the image file
                            height={200} // Desired size with correct aspect ratio
                            width={200} // Desired size with correct aspect ratio
                            alt="Your Name"
                        />
                    </div>

                </div>
                <div className={MainStyle.nftDetails} style={{ color: '#fff' }}>
                    {/* {activeNft.name} */}
                    <div className={MainStyle.title}>AFRO PUNK</div>
                    {/* {activeNft.id} */}
                    <span className={MainStyle.itemNumber}>#55</span>
                </div>
                <div className={MainStyle.owner}>
                    <div className={MainStyle.ownerImageContainer}>
                        <Image
                            className={MainStyle.selectedNft}
                            src={'/images/assets/owner/punkhead.png'}
                            alt="owner avatar"
                            height={70}
                            width={70}
                        />
                    </div>
                    <div className={MainStyle.ownerDetails}>
                        <div className={MainStyle.ownerNameAndHandle}>
                            <div>hdhdhdhdhdhhdhdhdhd</div>
                            <div className={MainStyle.ownerHandle}>@loktioncode</div>
                        </div>
                        <div className={MainStyle.ownerLink}>
                            <Image

                                src='/images/assets/owner/twitter.png' // Route of the image file
                                height={40} // Desired size with correct aspect ratio
                                width={40} // Desired size with correct aspect ratio
                                alt="twitter"
                            /></div>
                        <div className={MainStyle.ownerLink}>
                            <Image
                                src='/images/assets/owner/instagram.png' // Route of the image file
                                height={40} // Desired size with correct aspect ratio
                                width={40} // Desired size with correct aspect ratio
                                alt="instagram"
                            /></div>
                        <div className={MainStyle.ownerLink}>
                            <Image
                                src='/images/assets/owner/more.png' // Route of the image file
                                height={40} // Desired size with correct aspect ratio
                                width={40} // Desired size with correct aspect ratio
                                alt="more"
                            /></div>

                    </div>
                </div>
            </div>

        </div>
    );

}

export default Main;
