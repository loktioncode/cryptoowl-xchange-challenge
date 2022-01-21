
import React, {  useState, useEffect } from 'react';
import CollectionCard from './CollectionCard';

const NftList = (nftListData) => {

 
    useEffect(() => {

        if (nftListData.length === 0) {
            alert('No')
        }
    }, [])
    
    return (
        <div className='nftList'>

            {/* {nftListData.map(nft => (
                <div>
                    <CollectionCard key={nft.id} name={nft.name} id={nft.id} image={nft.image_original_url} traits={nft.traits} />
                </div>
            ))} */}
        </div>
    );

}

export default NftList;
