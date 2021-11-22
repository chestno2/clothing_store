import React from 'react'
import CollectionOverview from '../../Components/collectionoverview/CollectionOverview';


function ShoppingItems({ collections }) {
    console.log(collections);

    return (
        <div className="shop-page" >
            <CollectionOverview />

        </div>
    )


}



export default ShoppingItems
