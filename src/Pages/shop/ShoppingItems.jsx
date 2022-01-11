import React from 'react'
import { Route } from 'react-router';
import CollectionOverview from '../../Components/collectionoverview/CollectionOverview';
import { firestore } from '../../firebase/Firebase.config';
import CategoryItems from '../Category/CategoryItems';



class ShoppingItems extends React.Component {
  
    unsubscribeFromSnapshot = null;

    componentDidMount(){
       const collectionRef  = firestore.collection("collections");
       collectionRef.onSnapshot(async snapshot=>
        console.log(snapshot)
        )
    }
    

    render(){
        const {match} = this.props;
        return (
            <div className="shop-page" >
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:categoryId`} component={CategoryItems} />
        </div>
        )
    }
    // params:
    // categoryId: "hats"
    // [[Prototype]]: Object
    // path: "/shop/:categoryId"
    // url: "/shop/hats"
    //if we go shop / hats

    


}



export default ShoppingItems
