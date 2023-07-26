import React, {useState, useEffect} from "react";
import ReactGA from "react-ga";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import BounceLoader from "react-spinners/BounceLoader";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import ACSR from "./ACSR";
import AAAC from "./AAAC";
import AAC from "./AAC";
import AACSR from "./AACSR";
import ACAR from "./ACAR";
import Navbar from "./Navbar";
import Gallery from "./Gallery";

import {Routes, Route } from "react-router-dom";

import Footer from "./Footer";
import CompanyProfile from "./CompanyProfile"
import MissionNVision from "./MissionNVision";
import Certificate from "./Certificate";

const TrackingID = "UA-188273450-1";
ReactGA.initialize(TrackingID);

const App =() => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(()=> {
            setLoading(false)
        },1000)
    },[])

    return ( <>
    
            {
            loading ? //ternary Operator

            <BounceLoader
            color={"#2f69de"}
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
            className="mx-auto load"
            />
            : //ternary operator
        

    <>
    <Navbar />
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/Products/ACSR" element={<ACSR/>}/>
        <Route exact path="/Products/AAAC" element={<AAAC/>}/>
        <Route exact path="/Products/AAC" element={<AAC/>}/>
        <Route exact path="/Products/AACSR" element={<AACSR/>}/>
        <Route exact path="/Products/ACAR" element={<ACAR/>}/>
        <Route exact path="/gallery" element={<Gallery/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/about/company-profile" element={<CompanyProfile/>}/>
        <Route exact path="/about/mission-vision" element={<MissionNVision/>}/>
        <Route exact path="/about/cert" element={<Certificate/>}/>

    </Routes>
    <Footer/>
    </>
            }
    </>
    );
};

export default App;