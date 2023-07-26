import React,{ useEffect} from "react";
import ReactGA from "react-ga";
import ProductsGlimpse from "./ProductsGlimpse";
import About from "./About";
import ClientGlimpse from "./ClinetGlimpse";
import GalleryGlimpse from "./GalleryGlimpse";

const Home =() => {


    useEffect(() => {

        ReactGA.pageview(window.location.pathname);

    }, [])



    return ( 
    <>

         <div className="bg-overlay container-fluid d-flex">
	<div className="row my-auto innerHome">
    <div className="col-lg-9 col-10 HomeWords homeAdjustment">
		<h3 className=" text-white-50">Transform your power transmission with <br/><strong className="brand-name text-uppercase text-white">Excel Wires and Conductors</strong></h3>
        <h4 className="text-white-50">We are a team of talented engineers making conductors and cables</h4>
    </div>
	</div>
</div>
    <ProductsGlimpse/>
    <About/>
    <ClientGlimpse/>
    <GalleryGlimpse/>
    </>
    );
};

export default Home;