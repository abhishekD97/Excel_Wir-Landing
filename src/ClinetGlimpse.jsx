import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Client1 from "../src/images/client1.webp"
import Client2 from "../src/images/client2.webp"
import Client3 from "../src/images/client3.webp"
import Client4 from "../src/images/client4.webp"
import Client5 from "../src/images/client5.webp"

const ClientGlimpse =() => {
    
    return ( <>
        <section className="main_heading pt-4 pb-1">
        <div className="text-center">
            <h1 className="display-4 HomeWords text-uppercase"> Clients </h1>
            <hr className="w-25 mx-auto"></hr>
        </div>
        <div className="container">
            <div className="row mt-5 mb-0 g-3">
                <div className="col-md-2 col-6 col-xx1-2 mx-auto my-auto text-center">
                    <LazyLoadImage effect="blur" width="85%" src={Client1} className="card-img-top" alt="Drake"></LazyLoadImage>
                    <div className="card-body">
                    {/* <h5 className="card-title text-center fw-bold"></h5> */}
                    </div>
                </div>
                <div className="col-md-2 col-6 col-xx1-2 mx-auto my-auto text-center ">
                    <LazyLoadImage effect="blur" width="66%" src={Client2} className="card-img-top" alt="Drake"></LazyLoadImage>
                    <div className="card-body">
                    {/* <h5 className="card-title text-center fw-bold"></h5> */}
                    </div>
                </div>
                <div className="col-md-2 col-6 col-xx1-2 mx-auto my-auto text-center">
                    <LazyLoadImage effect="blur" width="100%" src={Client3} className="card-img-top" alt="Drake"></LazyLoadImage>
                    <div className="card-body">
                    {/* <h5 className="card-title text-center fw-bold"></h5> */}
                    </div>
                </div>
                <div className="col-md-2 col-6 col-xx1-2 mx-auto my-auto text-center">
                    <LazyLoadImage effect="blur" width="100%" src={Client4} className="card-img-top mx-auto" alt="Drake"></LazyLoadImage>
                    <div className="card-body">
                    {/* <h5 className="card-title text-center fw-bold"></h5> */}
                    </div>
                </div>
                <div className="col-md-2 col-6 col-xx1-2 mx-auto text-center">
                    <LazyLoadImage effect="blur" width="100%" src={Client5} className="card-img-top" alt="Drake"></LazyLoadImage>
                    <div className="card-body">
                    {/* <h5 className="card-title text-center fw-bold"></h5> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    );
};

export default ClientGlimpse;