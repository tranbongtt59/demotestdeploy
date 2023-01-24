import React from "react";
import productsData from "./productsData";
import { NavLink } from "react-router-dom";

const Products = () => {
  const products = productsData.map(product => {
    return (
      <div key={product.id} className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img className="img-fluid w-100" src={product.avatarurl} alt="" />
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">{product.name}</h6>
                <div className="d-flex justify-content-center">
                    <span>đ </span><h6>{product.price}</h6> <h6 className="text-muted ml-2"><del>{product.pricedel}</del></h6>
                </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
                <NavLink to={'/products/' + product.id } className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>Chi tiết</NavLink>
                {/* <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a> */}
                <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Cho vào giỏ hàng</a>
            </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="container-fluid pt-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5"><span className="px-2">Toàn bộ sản phẩm</span></h2>
          <div className="row px-xl-5 pb-3">
            {products}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
