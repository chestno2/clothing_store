import React from 'react'
import CollectionItem from '../collectionitem/CollectionItem';
import "./previewCollection.scss"
function PreviewCollection({title,items}) {
    
    console.log(items);
    return (
        <div className="collection-preview" >
           <h1 className="title" >{title}</h1>
           <div className="preview" >
              {/* filtering only 4 of the products from the items array */}
                {items.filter((item,idx)=>idx<4).map(({name,price,id,imageUrl})=>(
                    <CollectionItem key={id}  name={name} price={price} image={imageUrl} />
                ))}
           
           </div>
        </div>
    )
}

export default PreviewCollection
