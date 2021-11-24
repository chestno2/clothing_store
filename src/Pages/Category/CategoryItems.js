import React from 'react'
import { connect } from 'react-redux';

import { selectCategory } from '../../redux/Shop/shopSelector';
import "./category.scss"
function CategoryItems({ collection }) {
    console.log(collection);
    return (
        <div>
            <p>Category Page</p>

        </div>
    )
}
const mapStateToProps = (state, ownProps) => ({
    collection: selectCategory(ownProps.match.params.categoryId)(state)
})
//own props are all the props that are at the page of category page
export default connect(mapStateToProps)(CategoryItems)
