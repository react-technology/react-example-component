import React, { Component } from "react";

export default class Product extends Component {
    render() {
        return (
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="thumbnail">
                    <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                    <div class="caption">
                        <h3>Iphone X</h3>
                        <p>
                            29.000.000 VND
                        </p>
                        <p>
                            <a href="#" class="btn btn-primary">Mua Hàng</a>
                            {/* <a href="#" class="btn btn-default">Action</a> */}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

// export default Product;