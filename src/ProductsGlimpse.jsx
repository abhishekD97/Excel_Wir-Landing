import React from "react";
import imgdrake from "../src/images/Drake.webp"
import imgcoyote from "../src/images/Coyote.webp"
import imgrabbit from "../src/images/Rabbit.webp"
import imglynx from "../src/images/Lynx.webp"
import imgweasel from "../src/images/Weasel.webp"

const ProductsGlimpse =() => {
    return ( <>
        <section className="main_heading pt-5 pb-2">
        <div className="text-center">
            <h1 className="display-4 HomeWords text-uppercase"> Products </h1>
            <hr className="w-25 mx-auto"></hr>
        </div>
        <div className="container">
            <div className="row my-5 g-3">
                <div className="col-md-2 col-10 col-xx1-2 mx-auto text-center">
                    <img src={imgdrake} className="card-img-top Drake" alt="Drake"></img>
                    <div className="card-body">
                    <h5 className="card-title text-center fw-bold">Drake</h5>
                    </div>
                </div>
                <div className="col-md-2 col-10 col-xx1-2 mx-auto text-center ">
                    <img src={imgcoyote} className="card-img-top w-75" alt="Drake"></img>
                    <div className="card-body">
                    <h5 className="card-title text-center fw-bold">Coyote</h5>
                    </div>
                </div>
                <div className="col-md-2 col-10 col-xx1-2 mx-auto text-center">
                    <img src={imgrabbit} className="card-img-top w-75" alt="Drake"></img>
                    <div className="card-body">
                    <h5 className="card-title text-center fw-bold">Rabbit</h5>
                    </div>
                </div>
                <div className="col-md-2 col-10 col-xx1-2 mx-auto text-center">
                    <img src={imglynx} className="card-img-top w-75" alt="Drake"></img>
                    <div className="card-body">
                    <h5 className="card-title text-center fw-bold">Lynx</h5>
                    </div>
                </div>
                <div className="col-md-2 col-10 col-xx1-2 mx-auto text-center">
                    <img src={imgweasel} className="card-img-top w-75" alt="Drake"></img>
                    <div className="card-body">
                    <h5 className="card-title text-center fw-bold">Weasel</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    );
};

export default ProductsGlimpse;