import React from 'react'
import { Route } from 'react-router';
import CollectionOverview from '../../Components/collectionoverview/CollectionOverview';
import CategoryItems from '../Category/CategoryItems';



function ShoppingItems({ match }) {

    console.log(match);// isExact: true
    // params:
    // categoryId: "hats"
    // [[Prototype]]: Object
    // path: "/shop/:categoryId"
    // url: "/shop/hats"
    //if we go shop / hats

    return (
        <div className="shop-page" >
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:categoryId`} component={CategoryItems} />
        </div>
    )


}



export default ShoppingItems
