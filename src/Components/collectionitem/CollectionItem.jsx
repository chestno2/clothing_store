import React from 'react'
import CustomButton from '../custombutton/CustomButton'
import "./collectionitem.scss"
import { connect } from "react-redux"
import { addItem } from "../../redux/Cart/cartActions"

function CollectionItem({ item, addItem }) {
    console.log(item);
    //access items from items
    const { name, imageUrl, price } = item
    return (

        // these are the collections of the items
        <div className=" collection-item " >
            <div style={{
                backgroundImage: `url(${imageUrl})`
            }} className=" image" >

            </div>

            <div className="collection-footer">
                <span className="name" >{name}</span>
                <span className="price" >{price}</span>
            </div>
            <CustomButton inverted onClick={() => addItem(item)}  > Add to cart </CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
//item wo item hain jo hum add to cart pe click kr rhe hain

export default connect(null, mapDispatchToProps)(CollectionItem)
