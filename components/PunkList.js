import { useEthers } from "@usedapp/core";
import React, { useEffect, useState } from "react";
import { Image, p, div, div,  } from "@chakra-ui/react";
import { NFTLabsSDK } from "@nftlabs/sdk";

export const PunkList = ({displayAccount}) => {
    const { library } = useEthers();
    const [PunkList, setPunkList] = useState < any > ([]);

    useEffect(() => {
        async function fetchPunkList() {
            if (!library) {
                return;
            }
            const sdk = new NFTLabsSDK(library.getSigner());
            const nft = sdk.getNFTModule(
                process.env.NEXT_PUBLIC_NFT_MODULE_ADDRESS 
            );
            if (displayAccount) {
                const owned = await nft.getOwned(displayAccount);
                setPunkList(owned);
            } else {
                setPunkList(await nft.getAll());
            }
        }
        fetchPunkList();
    }, [library, displayAccount]);

    return (
        <>
            <div>
                {PunkList.length ? (
                    PunkList.map((sword) => (
                        <div key={sword.id}>
                            < >
                                <div>
                                    <Image src={sword.image} divSize="64px" />
                                    <p >{sword.name}</p>
                                    <p >{sword.description}</p>
                                </div>

                                <div >
                                    <pre>{JSON.stringify(sword.properties, null, 2)}</pre>
                                </div>
                            </>
                        </div>
                    ))
                ) : (
                    <>
                        <p>No swords</p>
                    </>
                )}
            </div>
        </>
    );
};