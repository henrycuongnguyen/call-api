import React, { Component } from 'react';

class ProductList extends Component {
  render() {
    return (
      
        <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">List product</h3>
        </div>
        <div className="panel-body">
          
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>STT</th>
                <th>Ma sp</th>
                <th>Ten sp</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* lay prop tu productlistpage */}
              {this.props.children}
            </tbody>
          </table>
          
        </div>
    </div>
    );
  }
}

export default ProductList;
