
import React, { useState, Fragment } from 'react';
import CollectionCard from './CollectionCard';
import Link from 'next/link'
import NftListStyle from '../styles/nftListStyle.module.css'


const NftList = (props) => {

    return (

        <div className={ NftListStyle.nftListStyle}>
            {props.nftListData.length === 0 ? (
                <Fragment>loading..</Fragment>
            ) : (
                props.nftListData.map(nft => (
                    <div>
                        <CollectionCard key={nft.id} name={nft.name} id={nft.id} image={(nft.image_original_url === null) ? '/images/1.jpg' : nft.image_original_url} traits={nft.traits} />
                    </div>
                ))

            ) }
        </div>
    );

}

export default NftList;
