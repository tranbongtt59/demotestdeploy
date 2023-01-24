import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Product extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid pt-5">
            <div className="text-center mb-4">
                <h2 className="section-title px-5"><span className="px-2">All Products</span></h2>
            </div>
            <div className="row px-xl-5 pb-3">
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src="https://cf.shopee.vn/file/sg-11134201-22110-jtz6218loojved" alt="" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <NavLink to={'/products/' + 1 } className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>Chi tiết</NavLink>
                            {/* <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a> */}
                            <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src="https://cf.shopee.vn/file/sg-11134201-22110-3n8umz8koojv98" alt="" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                            <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src="https://cf.shopee.vn/file/sg-11134201-22110-5zsngmdloojva9" alt="" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                            <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src="https://cf.shopee.vn/file/sg-11134201-22110-mkvr7i3koojvab" alt="" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                            <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                        </div>
                    </div>
                </div>                
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src="https://cf.shopee.vn/file/sg-11134201-22110-g7ur9qgwtmjv36" alt="" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                            <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src="https://cf.shopee.vn/file/sg-11134201-22110-sztnzsk5nojv6c" alt="" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                            <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src="img/product-7.jpg" alt="" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                            <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src="img/product-8.jpg" alt="" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                            <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
 
export default Product;