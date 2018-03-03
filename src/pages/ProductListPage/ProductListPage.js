// import React, { Component } from 'react';
// import ProductList from './../../components/ProductList/ProductList';
// import ProductItem from '../../components/ProductItem/ProductItem';
// import {connect} from 'react-redux';
// import callApi from './../../utils/apiCaller';
// import {Link} from 'react-router-dom';

// //dua ProductList vao day thi ra file ProductList truyen this.prop.children
// class ProductListPage extends Component {

//     constructor(props){
//         super(props);
//         this.state={
//             products: []
//         }
//     }

//     componentDidMount(){
//         callApi('products','GET',null).then(res => {
//             // console.log(res);
//             this.setState({
//                 products: res.data
//             });
//         });
//     }
// // su khi co du lieu se render lan nua
//   render() {
//     //   var { products }=this.props;
//     // var products = [];
//     var {products} = this.state;

//     return (
//         <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">        
//             <Link to={'/product/add'} className="btn btn-info mb-10">add product</Link>
//             <ProductList>
//                 {this.showProducts(products)}
//             </ProductList>
            
//         </div>
//     );
//   }

//   showProducts = (products) => {
//     var result= null;
//     if(products.length>0){
//         result = products.map((product, index)=>{
//             return (
//                 <ProductItem
//                     key={index}
//                     index={index}
//                     product={product} // prop product item
//                 />
//             );
//         })
//     }
//     return result;
//   }
// }
// //map tu state tren store va product cua reducers
// const mapStateToProps = state =>{
//     return {
//         products: state.products
//     };
// }


// export default connect(mapStateToProps,null)(ProductListPage);


import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchProductsRequest, actDeleteProductRequest } from './../../actions/index';

class ProductListPage extends Component {

    componentDidMount() {
        this.props.fetchAllProducts();
    }

    onDelete = (id) => {
        this.props.onDeleteProduct(id);
    }

    render() {
        var { products } = this.props;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/product/add" className="btn btn-info mb-10">
                    Thêm Sản Phẩm
                </Link>
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>
            </div>
        );
    }

    showProducts(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
                    />
                );
            });
        }
        return result;
    }

}
//lay props tu store ve
const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts : () => {
            dispatch(actFetchProductsRequest());
        },
        onDeleteProduct : (id) => {
            dispatch(actDeleteProductRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
