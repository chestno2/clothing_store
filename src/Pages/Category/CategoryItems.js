import React from 'react'
import { connect } from 'react-redux';
import CollectionItem from '../../Components/collectionitem/CollectionItem';

import { selectCollection } from "../../redux/Shop/shopSelector"
import "./categoryItems.scss"
function CategoryItems({ collection }) {

    const { items, title } = collection
    console.log(items);
    return (
        <div className="collection-page">
            <h2 className="title" >{title}</h2>
            <div className="items" >
                {items.map(item => <CollectionItem key={item.id} item={item} />)}
            </div>
        </div>
    )
}
const mapStateToProps = (state, ownProps) => ({

    collection: selectCollection(ownProps.match.params.categoryId)(state)
})
//own props are all the props that are at the page of category page
export default connect(mapStateToProps)(CategoryItems)
