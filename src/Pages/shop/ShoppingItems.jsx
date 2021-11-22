import React from 'react'

import PreviewCollection from '../../Components/Preview/PreviewCollection';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/Shop/shopSelector';
import { connect } from 'react-redux';

const ShoppingItems = ({ collections }) => {

    return (
        <div className="shop-page" >
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <PreviewCollection key={id} {...otherCollectionProps} />
                ))

            }

        </div>
    )


}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})


export default connect(mapStateToProps)(ShoppingItems)
