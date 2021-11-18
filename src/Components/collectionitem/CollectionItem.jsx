import React from 'react'
import CustomButton from '../custombutton/CustomButton'
import "./collectionitem.scss"
function CollectionItem({ id, name, image, price }) {
    return (

        // these are the collections of the items
        <div className=" collection-item " >
            <div style={{
                backgroundImage: `url(${image})`
            }} className=" image" >

            </div>

            <div className="collection-footer">
                <span className="name" >{name}</span>
                <span className="price" >{price}</span>
            </div>
            <CustomButton inverted  > Add to cart </CustomButton>
        </div>
    )
}

export default CollectionItem
