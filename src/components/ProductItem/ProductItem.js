// import React, { Component } from 'react';

// class ProductItem extends Component {
//   render() {
//     // lay prop tu productlist
//       var {product, index} = this.props;

//       var statusName = product.status===true ? 'con hang' : 'het hang';
//       // var statusClass = product.status===true ? 'default' : 'warning';
//     return (
//         <tr>
//         <td> {index + 1}</td>
//         <td>{product.id}</td>
//         <td>{product.name}</td>
//         <td>{product.price}</td>
//         <td>
          
//           <span>
//             {statusName}
//           </span>
          
//         </td>
//         <td>
          
//           <button type="button" className="btn btn-default mr-10">update</button>
//           <button type="button" className="btn btn-danger">delete</button>
          
//         </td>
//       </tr>
//     );
//   }
// }

// export default ProductItem;


import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {

    onDelete = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            this.props.onDelete(id);
        }
    }

    render() {
        var { product, index } = this.props;
        var statusName = product.status ? 'Còn Hàng' : 'Hết Hàng';
        var statusClass = product.status ? 'warning' : 'default';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label label-${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td>
                    <Link
                        to={`/product/${product.id}/edit`}
                        className="btn btn-success mr-10"
                    >
                        Sửa
                    </Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.onDelete(product.id)}
                    >
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
