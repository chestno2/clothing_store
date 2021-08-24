import React, { Component } from 'react'
 import shopdata  from './shopdata';
import PreviewCollection from '../../Components/Preview/PreviewCollection';
export class ShoppingItems extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            collections:shopdata
        }
    }
   
    render() {
        const {collections} = this.state
        // destructuring the collections
        console.log(collections);
        return (
            <div className="shop-page" >
          {
              collections.map((item)=>(
              <PreviewCollection key={item.id} items={item.items} title={item.title} />
              ))
              
          }
          
            </div>
        )
    }
}

export default ShoppingItems
