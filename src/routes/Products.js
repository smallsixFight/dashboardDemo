import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

const Products = ({ dispatch, test }) => {
    // const {testdata} = this.props;
    // console.log('data:' + testdata);
    function handleDelete(id) {
        dispatch({
            type: 'test/delete',
            payload: id
        });
    }
    return (
        <div>
            <h2>List of Products</h2>
            <ProductList onDelete={handleDelete} products={test.testdata}></ProductList>
        </div>
    )
}

// const Products = (props) => (
//     <h2>List of Products</h2>
// );

// export default Products;
export default connect(({ test }) => ({
    test,
}))(Products);