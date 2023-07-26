import React, {useState, useEffect} from "react";
import BounceLoader from "react-spinners/BounceLoader";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import img1 from "./images/img1.webp";
import img2 from "./images/img2.webp";
import img3 from "./images/img3.webp";
import img4 from "./images/img4.webp";
import img5 from "./images/img5OP.webp";
import img6 from "./images/img6OP.webp";


const Gallery =() => {


    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(()=> {
            setLoading(false)
        },500)
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
        <section className="main_heading py-5  bg-light">
        <div className="text-center pb-5">
            <h1 className="display-4 HomeWords text-uppercase"> Gallery </h1>
            <hr className="w-25 mx-auto"></hr>
        </div>
        <div className="container">
            <div className="row gy-1">
                <div className="col-md-4 col-5 col-xxl-4 mx-auto">
                    <figure>
                    <LazyLoadImage effect="blur" height="200px" width="100%" src={img1} alt="asd1" loading="" className=" about_imageGallery  shadow p-2"/>
                    </figure>
                </div>
                <div className="col-md-4 col-5 col-xxl-4 mx-auto">
                    <figure>
                    <LazyLoadImage effect="blur" height="200px" width="100%" src={img2} alt="asd1" loading="" className=" about_imageGallery  shadow p-2"/>
                    </figure>
                </div>
            
                <div className="col-md-4 col-5 col-xxl-4 mx-auto">
                    <figure>
                    <LazyLoadImage effect="blur" height="200px" width="100%" src={img3} alt="asd1" loading="" className=" about_imageGallery  shadow p-2"/>
                    </figure>
                </div>
                <div className="col-md-4 col-5 col-xxl-4 mx-auto">
                    <figure>
                    <LazyLoadImage effect="blur" height="200px" width="100%" src={img4} alt="asd1" loading="" className=" about_imageGallery  shadow p-2"/>
                    </figure>
                </div>
                <div className="col-md-4 col-5 col-xxl-4 mx-auto">
                    <figure>
                    <LazyLoadImage effect="blur" height="200px" width="100%" src={img5} alt="asd1" loading="" className=" about_imageGallery  shadow p-2"/>
                    </figure>
                </div>
                <div className="col-md-4 col-5 col-xxl-4 mx-auto">
                    <figure>
                    <LazyLoadImage effect="blur" height="200px" width="100%" src={img6} alt="asd1" loading="" className=" about_imageGallery  shadow p-2"/>
                    </figure>
                </div>
                </div>
        </div>
        </section>
    </>
    }
    </>
    );
};

export default Gallery;