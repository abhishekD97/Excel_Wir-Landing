import React, {useState, useEffect} from "react";
import ReactGA from "react-ga";
import BounceLoader from "react-spinners/BounceLoader";
import { LazyLoadComponent, LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import img1 from "./images/img1.webp";
import img2 from "./images/img2.webp";
import img3 from "./images/img3.webp";
import img4 from "./images/img4.webp";
import img5 from "./images/img5OP.webp";
import img6 from "./images/img6OP.webp";
import img7 from "./images/img7OP.webp";
import img8 from "./images/img8OP.webp";
import img9 from "./images/img9OP.webp";
import img10 from "./images/img10OP.webp";
import img11 from "./images/img11OP.webp";
import img12 from "./images/img12OP.webp";
import img13 from "./images/img13OP.webp";


const Gallery =() => {


    useEffect(() => {

        ReactGA.pageview(window.location.pathname);

    }, [])


    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(()=> {
            setLoading(false)
        },100)
    },[])



    return ( <>
    
    {
        
        loading ? //Ternary Operator

        <BounceLoader
            color={"#2f69de"}
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
            className="mx-auto"
            />
            : //ternary Operator
    <>
        <LazyLoadComponent className="main_heading py-5  bg-light">
        <div className="text-center pb-5">
            <h1 className="display-4 HomeWords text-uppercase"> Gallery </h1>
            <hr className="w-25 mx-auto"></hr>
        </div>
        <div className="container">
            <div className="row gy-1">
                <div className="col-md-4 col-5 col-xxl-4 mx-auto">
                    <figure>
                        <LazyLoadImage effect="blur" height="200px" width="100%" src={img1} alt="asd1" className=" about_imageGallery  shadow p-2"/>
                    </figure>
                </div>
                <div className="col-md-4 col-5 col-xxl-4 mx-auto">
                    <figure>
                        <LazyLoadImage effect="blur"  height="200px" width="100%" src={img2} alt="asd2" className="about_imageGallery  shadow p-2"/>
                    </figure>
                </div>
            
                <div className="col-md-4 col-5 col-xxl-4 mx-auto">
                    <figure>
                        <LazyLoadImage effect="blur"  height="200px" width="100%" src={img3} alt="asd3" className="about_imageGallery  shadow p-2"/>
                    </figure>
                </div>
                <div className="col-md-4 col-5 col-xxl-4 mx-auto">
                    <figure>
                        <LazyLoadImage effect="blur"  height="200px" width="100%" src={img4} alt="asd4" className="about_imageGallery  shadow p-2"/>
                    </figure>
                </div>
                <div className="col-md-4 col-5 col-xxl-4 mx-auto">
                    <figure>
                        <LazyLoadImage effect="blur" height="200px" width="100%" src={img5} alt="asd5" className="about_imageGallery  shadow p-2"/>
                    </figure>
                </div>
                <div className="col-md-4 col-5 col-xxl-4 mx-auto">
                    <figure>
                        <LazyLoadImage effect="blur" height="200px" width="100%" src={img6} alt="asd6" className="about_imageGallery  shadow p-2"/>
                    </figure>
                </div>
                <div className="col-md-4 col-5 col-xxl-4 mx-auto">
                    <figure>
                        <LazyLoadImage effect="blur" height="200px" width="100%" src={img7} alt="asd7" className="about_imageGallery  shadow p-2"/>
                    </figure>
                </div>
                <div className="col-md-4 col-5 col-xxl-4 mx-auto">
                    <figure>
                        <LazyLoadImage effect="blur" height="200px" width="100%" src={img8} alt="asd8" className="about_imageGallery  shadow p-2"/>
                    </figure>
                </div>
                <div className="col-md-4 col-5 col-xxl-4 mx-auto">
                    <figure>
                        <LazyLoadImage effect="blur" height="200px" width="100%" src={img9} alt="asd9" className="about_imageGallery  shadow p-2"/>
                    </figure>
                </div>
                <div className="col-md-4 col-5 col-xxl-4 mx-auto">
                    <figure>
                        <LazyLoadImage effect="blur" height="200px" width="100%" src={img10} alt="asd10" className="about_imageGallery  shadow p-2"/>
                    </figure>
                </div>
                <div className="col-md-4 col-5 col-xxl-4 mx-auto">
                    <figure>
                        <LazyLoadImage effect="blur" height="200px" width="100%" src={img11} alt="asd11" className="about_imageGallery  shadow p-2"/>
                    </figure>
                </div>
                <div className="col-md-4 col-5 col-xxl-4 mx-auto">
                    <figure>
                        <LazyLoadImage effect="blur" height="200px" width="100%" src={img12} alt="asd12" className="about_imageGallery  shadow p-2"/>
                    </figure>
                </div>
                <div className="col-md-4 col-5 col-xxl-4 mx-auto">
                    <figure>
                        <LazyLoadImage effect="blur" height="200px" width="100%" src={img13} alt="asd13" className="about_imageGallery  shadow p-2"/>
                    </figure>
                </div>
                </div>
        </div>
        </LazyLoadComponent>
    </>
    }
    </>
    );
};

export default Gallery;