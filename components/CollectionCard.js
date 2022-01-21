import collectionCard from '../styles/collectionCard.module.css'
import Image from 'next/image'



export default function CollectionCard({ id, name, traits, image }) {
    return (
        // apply style from styles
        <div className={collectionCard.CollectionCard}>
            <Image
                src={image} // Route of the image file
                height={400}
                width={400}
                alt="Your Name"
            />
            <div className={collectionCard.details}>
                <div className={collectionCard.name} >
                    {name} <div className={collectionCard.id} >.#{id}</div>
                </div>
                <div className={collectionCard.priceContainer} >
                    <Image
                        className={collectionCard.wethImage}
                        src='/images/assets/weth.png' // Route of the image file
                        height={30} // Desired size with correct aspect ratio
                        width={20} // Desired size with correct aspect ratio
                        alt="Your Name"
                    />
                    <div className={collectionCard.price} >{traits[0]?.value}</div>
                </div>

            </div>

        </div>

    )
}