import { useEthers } from "@usedapp/core";
import React, { useEffect, useState } from "react";

import axios from 'axios'

export const PunkList = ({ displayAccount }) => {

    const [PunkList, setPunkList] = useState([]);

    useEffect(() => {
        const fetchPunkList = async () => {
            const openseaData = await axios.get(`https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=${process.env.NEXT_PUBLIC_NFT_MODULE_ADDRESS}`)
            // alert(openseaData.data.assets)
            setPunkList(openseaData.data.assets)
        }


        fetchPunkList();
    }, [displayAccount]);

    return (
        <>
            <div>
                {PunkList.length ? (
                    PunkList.map((punk) => (
                        <div key={punk.id}>
                            < >
                                <div>

                                    <img
                                        src={punk.image_url} // Route of the image file
                                        height={200}
                                        width={200}
                                        alt="Nft image">
                                    </img>
                                    <p >{punk.name}</p>
                                    <p >{punk.description}</p>
                                </div>

                                <div >
                                    <pre>{JSON.stringify(punk.properties, null, 2)}</pre>
                                </div>
                            </>
                        </div>
                    ))
                ) : (
                    <>
                        <p>No punks</p>
                    </>
                )}
            </div>
        </>
    );
};