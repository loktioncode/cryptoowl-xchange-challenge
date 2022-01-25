import React, { useContext, useState, useEffect } from 'react';
import LoadingPageContent from '../components/LoadingPageContent'
import Link from 'next/link'
import MarketPlaceList from '../components/MarketPlaceList'
import Main from '../components/Main'
import Layout from '../components/layout'

import { NftContext } from '../components/config/state';
import axios from 'axios'


export default function MaketPlace() {

    const [nftData, setNftData] = useContext(NftContext);
    const [selectedNft, setSelectedNft] = useState(0)



    useEffect(() => {
        // const getMyNfts = async () => {
        //     const openseaData = await axios.get(`https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=${process.env.NEXT_PUBLIC_NFT_MODULE_ADDRESS}`)
        //     // alert(openseaData.data.assets)
        //     // window.sessionStorage.set('openseaData', JSON.stringify(openseaData));
        //     setNftData(openseaData.data.assets)
        // }

        const getMyNfts = async () => {
            const openseaData = await axios.get(`https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x0570408Ba92aC0F8C3a19C0890f9a3829CFf4804`)
            // alert(openseaData.data.assets)
            // window.sessionStorage.set('openseaData', JSON.stringify(openseaData));
            setNftData(openseaData.data.assets)
        }

        return getMyNfts();
    }, [])



    return (
        <Layout page="market">
            <div className='pt-16' >
                {
                    nftData.length > 0 && (
                        <div >
                            <MarketPlaceList nftListData={nftData} setSelectedNft={setSelectedNft} />
                        </div>
                    )
                }

            </div>
        </Layout>
    )


}