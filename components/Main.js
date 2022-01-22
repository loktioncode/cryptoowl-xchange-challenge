
import React, { useState, Fragment, useEffect } from 'react';
import CollectionCard from './CollectionCard';
import Link from 'next/link'
import MainStyle from '../styles/mainStyle.module.css'
import Image from 'next/image'



const Main = (props) => {
    const [activeNft, setActiveNft] = useState(props.nftListData[0])
    const more = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
    </svg>;
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
                            height={250} // Desired size with correct aspect ratio
                            width={250} // Desired size with correct aspect ratio
                            alt="Your Name"
                        />
                    </div>

                </div>
                <div className={MainStyle.nftDetails} style={{ color: '#fff' }}>

                    <div className={MainStyle.title}>{activeNft.name} <span className={MainStyle.itemNumber}>~#{activeNft.token_id} </span></div>


                    <div className={MainStyle.owner}>
                        <div className={MainStyle.ownerImageContainer}>
                            <Image
                                className={MainStyle.selectedNft}
                                src={activeNft.owner.profile_img_url}
                                alt="owner avatar"
                                height={70}
                                width={70}
                            />
                        </div>
                        <div className={MainStyle.ownerDetails}>
                            <div className={MainStyle.ownerNameAndHandle}>
                                <div>{activeNft.owner.address}</div>
                                <div className={MainStyle.ownerHandle}>@loktioncode</div>
                            </div>
                            <div className={MainStyle.ownerLink}>
                                <Image
                                    src='https://img.icons8.com/glyph-neue/30/000000/instagram-new.png' // Route of the image file
                                    height={20} // Desired size with correct aspect ratio
                                    width={20} // Desired size with correct aspect ratio
                                    alt="Your Name"
                                />
                            </div>
                            <div className={MainStyle.ownerLink}>
                                <Image
                                    src='https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png' // Route of the image file
                                    height={20} // Desired size with correct aspect ratio
                                    width={20} // Desired size with correct aspect ratio
                                    alt="Your Name"
                                />
                            </div>
                            <div className={MainStyle.ownerLink}>
                                <Image
                                    src='https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/30/000000/external-more-multimedia-kiranshastry-lineal-kiranshastry.png' // Route of the image file
                                    height={20} // Desired size with correct aspect ratio
                                    width={20} // Desired size with correct aspect ratio
                                    alt="Your Name"
                                />

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

}

export default Main;
