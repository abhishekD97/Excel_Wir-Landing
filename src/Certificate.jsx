import React, {useEffect} from "react";
import ReactGA from "react-ga";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import img1 from "./images/BIS Certificate.jpg"
import img2 from "./images/NSIC Certificate_001.jpg"
import img3 from "./images/Vendor Copy - HESCOM.jpg"
import img4 from "./images/Vendor Copy - MESCOM.jpg"
import img5 from "./images/GESCOM.jpg"
import img7 from "./images/Udyam Registration.png"
import img8 from "./images/SSI Certificate.jpg"
import img9 from "./images/CPRI Reports - Rabit.jpg"
import img10 from "./images/CPRI Reports - Coyote-1.jpg"
import img11 from "./images/CPRI Reports - Coyote-2.jpg"
import img12 from "./images/CPRI Reports - Weasel.jpg"

const Certificate =() => {


    useEffect(() => {

        ReactGA.pageview(window.location.pathname + window.location.search);

    }, [])




    return ( <>
        <section className="main_heading py-5  bg-light">
        <div className="text-center pb-5">
            <h1 className="display-4 HomeWords text-uppercase"> Certificate </h1>
            <hr className="w-25 mx-auto"></hr>
        </div>
        <div className="container">
            <div className="row gy-1">
                <div className="col-md-4 col-5 col-xxl-4 mx-auto">
                    <figure className="text-center">
                        <LazyLoadImage effect="blur" src={img1} alt="asd1" data-bs-toggle="modal" data-bs-target="#img1" className="img-fluid about_imageGalleryCertificate shadow p-2"/>
                        <div className=" modal fade" id="img1" tabIndex="-1" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className=" modal-body">
                                        <button type="button" className="btn-close" 
                                        data-bs-dismiss="modal" aria-label="Close"></button>

                                       <LazyLoadImage effect="blur" src={img1} alt="#" className="d-block w-100"></LazyLoadImage> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </figure>
                </div>
                <div className="col-md-4 col-5 col-xxl-4 mx-auto">
                    <figure  className="text-center">
                        <LazyLoadImage effect="blur" src={img2} alt="asd2" data-bs-toggle="modal" data-bs-target="#img2" className="img-fluid about_imageGalleryCertificate shadow p-2"/>
                        <div className=" modal fade" id="img2" tabIndex="-1" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className=" modal-body">
                                        <button type="button" className="btn-close" 
                                        data-bs-dismiss="modal" aria-label="Close"></button>

                                       <LazyLoadImage effect="blur" src={img2} alt="#" className="d-block w-100"></LazyLoadImage> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </figure>
                </div>
            
                <div className="col-md-4 col-5 col-xxl-4 mx-auto">
                    <figure  className="text-center">
                    <LazyLoadImage effect="blur" src={img3} alt="asd1" data-bs-toggle="modal" data-bs-target="#img3" className="img-fluid about_imageGalleryCertificate shadow p-2"/>
                        <div className=" modal fade" id="img3" tabIndex="-1" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className=" modal-body">
                                        <button type="button" className="btn-close" 
                                        data-bs-dismiss="modal" aria-label="Close"></button>

                                       <LazyLoadImage src={img3} alt="#" className="d-block w-100"></LazyLoadImage> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </figure>
                </div>
                <div className="col-md-4 col-5 col-xxl-4 mx-auto">
                    <figure  className="text-center">
                    <LazyLoadImage effect="blur" src={img4} alt="asd1" data-bs-toggle="modal" data-bs-target="#img4" className="img-fluid about_imageGalleryCertificate shadow p-2"/>
                        <div className=" modal fade" id="img4" tabIndex="-1" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className=" modal-body">
                                        <button type="button" className="btn-close" 
                                        data-bs-dismiss="modal" aria-label="Close"></button>

                                       <LazyLoadImage src={img4} alt="#" className="d-block w-100"></LazyLoadImage> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </figure>
                </div>
                <div className="col-md-4 col-5 col-xxl-4 mx-auto">
                    <figure  className="text-center">
                    <LazyLoadImage effect="blur" src={img5} alt="asd1" data-bs-toggle="modal" data-bs-target="#img5" className="img-fluid about_imageGalleryCertificate shadow p-2"/>
                        <div className=" modal fade" id="img5" tabIndex="-1" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className=" modal-body">
                                        <button type="button" className="btn-close" 
                                        data-bs-dismiss="modal" aria-label="Close"></button>

                                       <LazyLoadImage src={img5} alt="#" className="d-block w-100"></LazyLoadImage> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </figure>
                </div>
                {/* <div className="col-md-4 col-5 col-xxl-4 mx-auto"> */}
                    {/* <figure  className="text-center">
                    <LazyLoadImage effect="blur" src={img6} alt="asd1" data-bs-toggle="modal" data-bs-target="#img6" className="img-fluid about_imageGalleryCertificate shadow p-2"/>
                        <div className=" modal fade" id="img6" tabIndex="-1" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className=" modal-body">
                                        <button type="button" className="btn-close" 
                                        data-bs-dismiss="modal" aria-label="Close"></button>
                                       <LazyLoadImage src={img6} alt="#" className="d-block w-100"></LazyLoadImage> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </figure> */}
                {/* </div> */}
                <div className="col-md-4 col-5 col-xxl-4 mx-auto">
                    <figure  className="text-center">
                    <LazyLoadImage effect="blur" src={img7} alt="asd1" data-bs-toggle="modal" data-bs-target="#img7" className="img-fluid about_imageGalleryCertificate shadow p-2"/>
                        <div className=" modal fade" id="img7" tabIndex="-1" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className=" modal-body">
                                        <button type="button" className="btn-close" 
                                        data-bs-dismiss="modal" aria-label="Close"></button>

                                       <LazyLoadImage src={img7} alt="#" className="d-block w-100"></LazyLoadImage> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </figure>
                </div>
                <div className="col-md-4 col-5 col-xxl-4 mx-auto">
                    <figure  className="text-center">
                    <LazyLoadImage effect="blur" src={img8} alt="asd1" data-bs-toggle="modal" data-bs-target="#img8" className="img-fluid about_imageGalleryCertificate shadow p-2"/>
                        <div className=" modal fade" id="img8" tabIndex="-1" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className=" modal-body">
                                        <button type="button" className="btn-close" 
                                        data-bs-dismiss="modal" aria-label="Close"></button>

                                       <LazyLoadImage src={img8} alt="#" className="d-block w-100"></LazyLoadImage> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </figure>
                </div>
                <div className="col-md-4 col-5 col-xxl-4 mx-auto">
                    <figure  className="text-center">
                    <LazyLoadImage effect="blur" src={img9} alt="asd1" data-bs-toggle="modal" data-bs-target="#img9" className="img-fluid about_imageGalleryCertificate shadow p-2"/>
                        <div className=" modal fade" id="img9" tabIndex="-1" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className=" modal-body">
                                        <button type="button" className="btn-close" 
                                        data-bs-dismiss="modal" aria-label="Close"></button>

                                       <LazyLoadImage src={img9} alt="#" className="d-block w-100"></LazyLoadImage> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </figure>
                </div>
                <div className="col-md-4 col-5 col-xxl-4 mx-auto">
                    <figure  className="text-center">
                    <LazyLoadImage effect="blur" src={img10} alt="asd1" data-bs-toggle="modal" data-bs-target="#img10" className="img-fluid about_imageGalleryCertificate shadow p-2"/>
                        <div className=" modal fade" id="img10" tabIndex="-1" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className=" modal-body">
                                        <button type="button" className="btn-close" 
                                        data-bs-dismiss="modal" aria-label="Close"></button>

                                       <LazyLoadImage src={img10} alt="#" className="d-block w-100"></LazyLoadImage> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </figure>
                </div>
                <div className="col-md-4 col-5 col-xxl-4 mx-auto">
                    <figure  className="text-center">
                    <LazyLoadImage effect="blur" src={img11} alt="asd1" data-bs-toggle="modal" data-bs-target="#img11" className="img-fluid about_imageGalleryCertificate shadow p-2"/>
                        <div className=" modal fade" id="img11" tabIndex="-1" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className=" modal-body">
                                        <button type="button" className="btn-close" 
                                        data-bs-dismiss="modal" aria-label="Close"></button>

                                       <LazyLoadImage src={img11} alt="#" className="d-block w-100"></LazyLoadImage> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </figure>
                </div>
                <div className="col-md-4 col-5 col-xxl-4 mx-auto">
                    <figure  className="text-center">
                    <LazyLoadImage effect="blur" src={img12} alt="asd1" data-bs-toggle="modal" data-bs-target="#img12" className="img-fluid about_imageGalleryCertificate shadow p-2"/>
                        <div className=" modal fade" id="img12" tabIndex="-1" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className=" modal-body">
                                        <button type="button" className="btn-close" 
                                        data-bs-dismiss="modal" aria-label="Close"></button>

                                       <LazyLoadImage src={img12}  alt="#" className="d-block w-100"></LazyLoadImage> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </figure>
                </div>
                </div>
        </div>
        </section>
    </>
    );
};

export default Certificate;