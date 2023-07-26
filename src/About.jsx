import React from "react";
import { LazyLoadComponent, LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import img from "../src/images/fac.webp";

const About =() => {
    return ( <>
        <LazyLoadComponent className="main_heading my-5  bg-light py-5">
        <div className="text-center">
            <h1 className="display-4 HomeWords text-uppercase"> About us </h1>
            <hr className="w-25 mx-auto"></hr>
        </div>
        <div className="container">
            <div className="row my-5">
                <div className="col-lg-6 col-md-6 col-12 col-xxl-6 text-center my-auto">
                    <figure className="">
                        <LazyLoadImage  effect="blur" src={img} alt="aboutimg" className="p-2 img-fluid about_image"></LazyLoadImage>
                    </figure>
                </div>
                <div className="col-lg-6 col-md-6 col-12 col-xxl-6 d-flex justify-content-center align-items-start">
                    {/* <p className="fs-6 m-4"><strong>Excel Wires and Conductors</strong> is an IS 398 : PART 2 : 1996 certified firm and one of the top, leading enterprises in Karnataka, in the field of manufacture, Transmission, Distribution, Layouts, Turnkey Projects, I.P Sets of ACSR conductors. Prior to ACSR, we were the producer and supplier of line materials, HT metering cubicles, distribution boxes, and load survey boxes under the name Electro Fab, and we are still the top supplier in Karnataka since 1998. As a diverse operation, we manufacture aluminum conductors and insulated multistrand cables. The large number of inquiries received from various electrical boards demonstrate the ever-increasing need for the manufacturing of cables to meet the demands of household enquires for electricity boards and other businesses, autonomous entities, and so on. This motivated us to broaden our services to include the production and distribution of cables for industrial, welding, housing, submersible & LT cable.</p> */}
                    <p className="aboutContent m-4 mb-0">We <strong>Excel Wires and Conductors</strong> are a leading manufacturer of a variety of high-quality conductors for the electricity transmission and distribution industry in Hubli Karnataka. Our range of conductors includes ACSR conductors, AAC conductors, AAAC conductors, aluminum bare conductors, and aluminum covered conductors.<br></br>

<br></br>We have a state-of-the-art manufacturing facility and use the latest technology and manufacturing techniques to produce conductors that are reliable, durable, and safe for use. Our team of experts ensures that each conductor is made to meet the highest standards of quality and safety.<br></br>

<br></br>As one of the leading ACSR conductor, AAC conductor, AAAC conductor, aluminum bare conductor, and aluminum covered conductor manufacturers in Hubli Karnataka and all over India, we offer a wide range of conductor sizes and designs to meet the specific needs of our customers. We are always looking for ways to innovate and improve our products, and our commitment to excellence is reflected in everything we do.<br></br>

<br></br>Whether you need overhead conductors for electricity transmission or distribution, we have the expertise and experience to provide you with the best possible solutions. At Excel Wires and Conductors, we are dedicated to meeting the needs of our customers and providing them with the highest level of customer service.</p>
                </div>
            </div>
        </div>
    </LazyLoadComponent>
    
    </>
    );
};

export default About;