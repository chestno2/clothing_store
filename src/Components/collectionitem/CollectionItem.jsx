import React from 'react'
import "./collectionitem.scss"
function CollectionItem({ id, name, image, price }) {
    return (
        <div className=" collection-item " >
            <div style={{
                backgroundImage: `url(${image})`
            }} className=" image" >

            </div>
            <div className="collection-footer">
                <span className="name" >{name}</span>
                <span className="price" >{price}</span>
            </div>
        </div>
    )
}

export default CollectionItem
