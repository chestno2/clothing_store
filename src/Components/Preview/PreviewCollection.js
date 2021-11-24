import React from 'react'
import CollectionItem from '../collectionitem/CollectionItem';
import "./previewCollection.scss"
function PreviewCollection({ title, items }) {


    return (
        <div className="collection-preview" >
            <h1 className="title" >{title}</h1>
            <div className="preview" >
                {/* filtering only 4 of the products from the items array */}
                {items.filter((item, idx) => idx < 4).map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}

            </div>
        </div>
    )
}

export default PreviewCollection
