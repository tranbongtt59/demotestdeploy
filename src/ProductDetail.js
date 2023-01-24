import React from "react";
import { useParams } from "react-router-dom";
import productsData from "./productsData";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import "./css/style.css";

function ProductDetail() {
    let {id} = useParams();
    const thisProduct = productsData.find(prod => prod.id === id);
    var otherProducts = productsData.find(p => p.id !== id);
    if(productsData.length > 4) {
        otherProducts = getRandom(otherProducts, 4);
    }
    
    return (
        <div>
            {/* Page Header Start */}
            <div className="container-fluid mb-5">
            <div className="d-flex flex-column align-items-center justify-content-center" style={{min_height: "300px"}}>
                    <h1 className="font-weight-semi-bold text-uppercase mb-3">Chi tiết sản phẩm</h1>
                    <div className="d-inline-flex">
                        {/* <p className="m-0"><a href="#">Trang chủ</a></p> */}
                        <p className="m-0">Trang chủ</p>
                        <p className="m-0 px-2">-</p>
                        <p className="m-0">Chi tiết</p>
                    </div>
                </div>
            </div>
            {/* Page Header End */}


            {/* Shop Detail Start */}
            <div className="container-fluid py-5">
                <div className="row px-xl-5">
                    <div className="col-lg-5 pb-5">
                        <div id="product-carousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner border">
                                {
                                    <Carousel infiniteLoop autoPlay>
                                        {thisProduct.imagesurl.map(showImages)}
                                    </Carousel>
                                }
                            </div>
                            <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
                                <i className="fa fa-2x fa-angle-left text-dark"></i>
                            </a>
                            <a className="carousel-control-next" href="#product-carousel" data-slide="next">
                                <i className="fa fa-2x fa-angle-right text-dark"></i>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-7 pb-5">
                        <h3 className="font-weight-semi-bold">{thisProduct.name}</h3>
                        <div className="d-flex mb-3">
                            <div className="text-primary mr-2">
                                <small className="fas fa-star"></small>
                                <small className="fas fa-star"></small>
                                <small className="fas fa-star"></small>
                                <small className="fas fa-star-half-alt"></small>
                                <small className="far fa-star"></small>
                            </div>
                            <small className="pt-1">(50 Reviews)</small>
                        </div>
                        <h3 className="font-weight-semi-bold mb-4">{thisProduct.price}</h3>
                        <p className="mb-4">{thisProduct.briefdescription}</p>
                        <div className="d-flex mb-3">
                            <p className="text-dark font-weight-medium mb-0 mr-3">Sizes:</p>
                            <form>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="size-1" name="size" />
                                    <label className="custom-control-label" htmlFor="size-1">XS</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="size-2" name="size" />
                                    <label className="custom-control-label" htmlFor="size-2">S</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="size-3" name="size" />
                                    <label className="custom-control-label" htmlFor="size-3">M</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="size-4" name="size" />
                                    <label className="custom-control-label" htmlFor="size-4">L</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="size-5" name="size" />
                                    <label className="custom-control-label" htmlFor="size-5">XL</label>
                                </div>
                            </form>
                        </div>
                        <div className="d-flex mb-4">
                            <p className="text-dark font-weight-medium mb-0 mr-3">Colors:</p>
                            <form>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="color-1" name="color" />
                                    <label className="custom-control-label" htmlFor="color-1">Black</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="color-2" name="color" />
                                    <label className="custom-control-label" htmlFor="color-2">White</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="color-3" name="color" />
                                    <label className="custom-control-label" htmlFor="color-3">Red</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="color-4" name="color" />
                                    <label className="custom-control-label" htmlFor="color-4">Blue</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="color-5" name="color" />
                                    <label className="custom-control-label" htmlFor="color-5">Green</label>
                                </div>
                            </form>
                        </div>
                        <div className="d-flex align-items-center mb-4 pt-2">
                            <div className="input-group quantity mr-3" style={{width: "130px"}}>
                                <div className="input-group-btn">
                                    <button className="btn btn-primary btn-minus" type="button" >
                                    <i className="fa fa-minus"></i>
                                    </button>
                                </div>
                                <input type="text" className="form-control bg-secondary text-center" value={1} />
                                <div className="input-group-btn">
                                    <button className="btn btn-primary btn-plus" type="button">
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <button className="btn btn-primary px-3"><i className="fa fa-shopping-cart mr-1"></i>Cho vào giỏ hàng</button>
                        </div>
                        <div className="d-flex pt-2">
                            <p className="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
                            <div className="d-inline-flex">
                                <a className="text-dark px-2" href="">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a className="text-dark px-2" href="">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a className="text-dark px-2" href="">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a className="text-dark px-2" href="">
                                    <i className="fab fa-pinterest"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row px-xl-5">
                    <div className="col">
                        <div className="nav nav-tabs justify-content-center border-secondary mb-4">
                            <a className="nav-item nav-link active" data-toggle="tab" href="#tab-pane-1">Description</a>
                            <a className="nav-item nav-link" data-toggle="tab" href="#tab-pane-2">Information</a>
                            <a className="nav-item nav-link" data-toggle="tab" href="#tab-pane-3">Reviews (0)</a>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="tab-pane-1">
                                <h4 className="mb-3">Product Description</h4>
                                <p>{thisProduct.description}</p>
                            </div>
                            <div className="tab-pane fade" id="tab-pane-2">
                                <h4 className="mb-3">Additional Information</h4>
                                <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item px-0">
                                                Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                            </li>
                                            <li className="list-group-item px-0">
                                                Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                            </li>
                                            <li className="list-group-item px-0">
                                                Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                            </li>
                                            <li className="list-group-item px-0">
                                                Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                            </li>
                                        </ul> 
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item px-0">
                                                Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                            </li>
                                            <li className="list-group-item px-0">
                                                Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                            </li>
                                            <li className="list-group-item px-0">
                                                Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                            </li>
                                            <li className="list-group-item px-0">
                                                Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                            </li>
                                        </ul> 
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab-pane-3">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h4 className="mb-4">1 review for "Colorful Stylish Shirt"</h4>
                                        <div className="media mb-4">
                                            <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{width: "45px"}} />
                                            <div className="media-body">
                                                <h6>John Doe<small> - <i>01 Jan 2045</i></small></h6>
                                                <div className="text-primary mb-2">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star-half-alt"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                                <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <h4 className="mb-4">Leave a review</h4>
                                        <small>Your email address will not be published. Required fields are marked *</small>
                                        <div className="d-flex my-3">
                                            <p className="mb-0 mr-2">Your Rating * :</p>
                                            <div className="text-primary">
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                        </div>
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="message">Your Review *</label>
                                                <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name">Your Name *</label>
                                                <input type="text" className="form-control" id="name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Your Email *</label>
                                                <input type="email" className="form-control" id="email" />
                                            </div>
                                            <div className="form-group mb-0">
                                                <input type="submit" value="Leave Your Review" className="btn btn-primary px-3" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Shop Detail End */}


            {/* <!-- Products Start --> */}
    <div class="container-fluid py-5">
        <div class="text-center mb-4">
            <h2 class="section-title px-5"><span class="px-2">Có thể bạn sẽ thích</span></h2>
        </div>
        <div class="row px-xl-5">
            <div class="col">
                <div class="owl-carousel related-carousel">
                    <div class="card product-item border-0">
                        <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img class="img-fluid w-100" src="img/product-1.jpg" alt="" />
                        </div>
                        <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                            <div class="d-flex justify-content-center">
                                <h6>$123.00</h6><h6 class="text-muted ml-2"><del>$123.00</del></h6>
                            </div>
                        </div>
                        <div class="card-footer d-flex justify-content-between bg-light border">
                            <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>View Detail</a>
                            <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                        </div>
                    </div>
                    <div class="card product-item border-0">
                        <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img class="img-fluid w-100" src="img/product-2.jpg" alt="" />
                        </div>
                        <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                            <div class="d-flex justify-content-center">
                                <h6>$123.00</h6><h6 class="text-muted ml-2"><del>$123.00</del></h6>
                            </div>
                        </div>
                        <div class="card-footer d-flex justify-content-between bg-light border">
                            <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>View Detail</a>
                            <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                        </div>
                    </div>
                    <div class="card product-item border-0">
                        <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img class="img-fluid w-100" src="img/product-3.jpg" alt="" />
                        </div>
                        <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                            <div class="d-flex justify-content-center">
                                <h6>$123.00</h6><h6 class="text-muted ml-2"><del>$123.00</del></h6>
                            </div>
                        </div>
                        <div class="card-footer d-flex justify-content-between bg-light border">
                            <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>View Detail</a>
                            <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                        </div>
                    </div>
                    <div class="card product-item border-0">
                        <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img class="img-fluid w-100" src="img/product-4.jpg" alt="" />
                        </div>
                        <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                            <div class="d-flex justify-content-center">
                                <h6>$123.00</h6><h6 class="text-muted ml-2"><del>$123.00</del></h6>
                            </div>
                        </div>
                        <div class="card-footer d-flex justify-content-between bg-light border">
                            <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>View Detail</a>
                            <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                        </div>
                    </div>
                    <div class="card product-item border-0">
                        <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img class="img-fluid w-100" src="img/product-5.jpg" alt="" />
                        </div>
                        <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                            <div class="d-flex justify-content-center">
                                <h6>$123.00</h6><h6 class="text-muted ml-2"><del>$123.00</del></h6>
                            </div>
                        </div>
                        <div class="card-footer d-flex justify-content-between bg-light border">
                            <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>View Detail</a>
                            <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Products End --> */}


        </div>
    )
}

// web: https://react-responsive-carousel.js.org/
function showImages(url) {
    return (
        <div key={url}>
            <img className="w-100 h-100" src={url} alt="Image" />
            {/* <p className="legend">Legend 1</p> */}
        </div>
    );
}

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}
export default ProductDetail
