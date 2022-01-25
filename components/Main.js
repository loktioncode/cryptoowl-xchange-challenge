
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

        <div className={MainStyle.main} >
            <div className={MainStyle.mainContent}>
                <div className={MainStyle.nftHighlight}>
                    <div className={MainStyle.nftContainer}>
                        <Image
                            className={MainStyle.selectedNft}
                            src={activeNft.image_url}
                            height={250}
                            width={250}
                            alt="Your Name"
                        />
                    </div>

                </div>
                <div className={MainStyle.nftDetails} style={{ color: '#fff' }}>

                    <div className={MainStyle.title}>{activeNft.name} <span className={MainStyle.itemNumber}>~#{activeNft.token_id} </span>

                    </div>
                    <div className="flex">
                        <div className='flex-initial w-14'>
                            <Image
                                src='/images/assets/weth.png' // Route of the image file
                                height={50} // Desired size with correct aspect ratio
                                width={30} // Desired size with correct aspect ratio
                                alt="weth logo"
                            />
                        </div>
                        <div className='flex-initial w-14 ' ><p className='text-5xl font-semibold' >{activeNft.traits[0]?.value}</p></div>
                    </div>


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
                                <div className='text-blue-400'>{activeNft.owner.address}</div>
                                <div className={MainStyle.ownerHandle, 'text-blue-400'}>@loktioncode</div>
                            </div>


                        </div>
                        <div className={MainStyle.ownerDetails}>
                            <div className={MainStyle.ownerNameAndHandle}>
                                <button type="button" class="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    <svg width="20" height="20" fill="currentColor" class="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z">
                                        </path>
                                    </svg>
                                    Mint NFT
                                </button>
                            </div>
                            <div className={MainStyle.ownerLink, ' hover:bg-grey-600 pl-12'}>
                                <Image
                                    src='/images/more.svg' // Route of the image file
                                    height={30} // Desired size with correct aspect ratio
                                    width={30} // Desired size with correct aspect ratio
                                    alt="Your Name"
                                />

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div >
    );

}

export default Main;
