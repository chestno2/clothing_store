import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from "../../redux/Shop/shopSelector"
import PreviewCollection from '../Preview/PreviewCollection'
import "./collectionoverView.scss"
function CollectionOverview({ collections }) {
    return (
        <div className="collection-overview">
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <PreviewCollection key={id} {...otherCollectionProps} />
                ))

            }

        </div>
    )
}
const mapStateToprops = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToprops)(CollectionOverview)
