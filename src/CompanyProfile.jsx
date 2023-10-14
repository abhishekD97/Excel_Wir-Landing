import React,{ useEffect} from "react";
import ReactGA from "react-ga";
import Dir from "../src/images/dir.webp";
import About from "../src/images/about.webp";

const CompanyProfile =() => {


    
    useEffect(() => {

        ReactGA.pageview(window.location.pathname + window.location.search);

    }, [])



    return ( <>
     <section className="main_heading  bg-light">
        <div className="text-center py-5">
            <h1 className="display-4 HomeWords text-uppercase"> Founder's Message </h1>
            <hr className="w-25 mx-auto"></hr>
        </div>
        <div className="container">
            <div className="row my-lg-5 my-sm-3">
                <div className="col-lg-6 col-md-6 col-12 col-xxl-6 text-center my-auto">
                    <figure className="">
                        <img src={Dir} alt="aboutimg" className="p-2 img-fluid about_image2"></img>
                    </figure>
                </div>
                <div className="col-lg-6 col-md-6 col-12 col-xxl-6 d-flex justify-content-center align-items-start">
                    {/* <p className="fs-6 m-4"><strong>Excel Wires and Conductors</strong> is an IS 398 : PART 2 : 1996 certified firm and one of the top, leading enterprises in Karnataka, in the field of manufacture, Transmission, Distribution, Layouts, Turnkey Projects, I.P Sets of ACSR conductors. Prior to ACSR, we were the producer and supplier of line materials, HT metering cubicles, distribution boxes, and load survey boxes under the name Electro Fab, and we are still the top supplier in Karnataka since 1998. As a diverse operation, we manufacture aluminum conductors and insulated multistrand cables. The large number of inquiries received from various electrical boards demonstrate the ever-increasing need for the manufacturing of cables to meet the demands of household enquires for electricity boards and other businesses, autonomous entities, and so on. This motivated us to broaden our services to include the production and distribution of cables for industrial, welding, housing, submersible & LT cable.</p> */}
                    <p className="aboutContent col-lg-9 m-4 mx-5">We <strong>Excel Wires and Conductors</strong> has been a major participant in the Conductor & Cables business. We manufacture and sell a large amount of conductors and power cables across the country, all of which are created from sustainably managed resources. We take extra effort to safeguard the environment in addition to offering high-quality items.<br/><br/> Excel wires & conductors' quality systems meet the requirements of IS 398 : PART 2 : 1996 international standard standards. To meet the quality policy's objectives, the organization intends to execute and achieve overall quality management. Under the supervision and experience of Professionals and Quality Management Consultants, quality checks have been implemented at various work centers across the facility. <br/><br/> Management's consistent follow-up, internal/external audits, and workers' unwavering efforts have paid off handsomely. Working in compliance with quality processes is now ingrained in the culture of Excel wires & conductors. As we believe in doing things differently, we make continual attempts to go above norms and restrictions imposed by national and international standards and build our own standards to attain excellence in quality. The emphasis is on intensive study of subjects and fields of interest, as a consequence of which we find ourselves farther ahead on the path of continual progress every day.</p>
                </div>
            </div>
            <div className="text-center my-3">
            <h1 className="display-4 HomeWords text-uppercase"> Our History </h1>
            <hr className="w-25 mx-auto"></hr>
        </div>
            <div className="row py-lg-5 py-sm-3">
                
                <div className="col-lg-6 col-md-6 col-12 col-xxl-6 d-flex justify-content-center align-items-start">
                    {/* <p className="fs-6 m-4"><strong>Excel Wires and Conductors</strong> is an IS 398 : PART 2 : 1996 certified firm and one of the top, leading enterprises in Karnataka, in the field of manufacture, Transmission, Distribution, Layouts, Turnkey Projects, I.P Sets of ACSR conductors. Prior to ACSR, we were the producer and supplier of line materials, HT metering cubicles, distribution boxes, and load survey boxes under the name Electro Fab, and we are still the top supplier in Karnataka since 1998. As a diverse operation, we manufacture aluminum conductors and insulated multistrand cables. The large number of inquiries received from various electrical boards demonstrate the ever-increasing need for the manufacturing of cables to meet the demands of household enquires for electricity boards and other businesses, autonomous entities, and so on. This motivated us to broaden our services to include the production and distribution of cables for industrial, welding, housing, submersible & LT cable.</p> */}
                    <p className="aboutContent col-lg-8 m-4 mx-5">We <strong>Excel Wires and Conductors</strong> is an <strong>IS 398 : PART 2 : 1996</strong> certified firm and one of the top, leading enterprises in Karnataka, in the field of manufacture, Transmission, Distribution, Layouts, Turnkey Projects, I.P Sets of <strong>ACSR conductors</strong>. Prior to ACSR, we were the producer and supplier of line materials, HT metering cubicles, distribution boxes, and load survey boxes under the name <strong>Electro Fab</strong>, and we are still the top supplier in Karnataka since <strong>1998</strong>. As a diverse operation, we manufacture aluminum conductors and insulated multistrand cables. The large number of inquiries received from various electrical boards demonstrate the ever-increasing need for the manufacturing of cables to meet the demands of household enquires for electricity boards and other businesses, autonomous entities, and so on. This motivated us to broaden our services to include the production and distribution of cables for industrial, welding, housing, submersible & LT cable.<br/><br/>We are developing a fresh brand with high-quality products and ambitious goals. We understand the market since we are an established firm in line materials and ACSR conductor. Due to growth in the commercial sector and new customers, we are also growing and introducing manufacture in housing, industrial, welding, submersible, and LT cables.</p>
                </div>
                <div className="col-lg-6 col-md-6 col-12 col-xxl-6 text-center my-auto">
                    <figure className="">
                        <img src={About} alt="aboutimg" className="p-2 img-fluid about_image2"></img>
                    </figure>
                </div>
            </div>
        </div>
    </section>
    </>
    );
};

export default CompanyProfile;