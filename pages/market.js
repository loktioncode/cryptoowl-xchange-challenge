import React, { useContext, useState, useEffect } from 'react';
import LoadingPageContent from '../components/LoadingPageContent'
import Link from 'next/link'
import NftList from '../components/NftList'
import Main from '../components/Main'
import Layout from '../components/layout'
import marketplaceNav from '../components/dashTopNav'
import { useWeb3, useSwitchNetwork } from "@3rdweb/hooks"
import { NftContext } from '../components/config/state';
import axios from 'axios'


export default function MaketPlace() {

    const { address, chainId } = useWeb3();
    const [email, setEmail] = useState("");
    // const [nftData, setNftData] = useState([]);
    const [nftData, setNftData] = useContext(NftContext);
    const [selectedNft, setSelectedNft] = useState(0)



    useEffect(() => {
        const getMyNfts = async () => {
            const openseaData = await axios.get(`https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=${process.env.NEXT_PUBLIC_NFT_MODULE_ADDRESS}`)
            // alert(openseaData.data.assets)
            // window.sessionStorage.set('openseaData', JSON.stringify(openseaData));
            setNftData(openseaData.data.assets)
        }

        return getMyNfts();
    }, [])



    return (
        <Layout marketplace>
            <div className='pt-16' >
                {
                    nftData.length > 0 && (
                        <div >
                            {Array(nftData.length).fill(
                                <iframe
                                    src="https://cloudflare-ipfs.com/ipfs/bafybeigfwpsphinbvdbkdeamxz2pcex5pe5liuyjavjjwnsc5xrgususci?contract=0x877253AA0180b476932A022122a1e2268b3f7c8f&chainId=4&listingId=4"
                                    width="400px"
                                    height="500px"
                                    // style="max-width:100%;"
                                    frameborder="0"
                                />
                            )}
                            <NftList nftListData={nftData} setSelectedNft={setSelectedNft} />
                        </div>
                    )
                }

            </div>
        </Layout>
    )


}