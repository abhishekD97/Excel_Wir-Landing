import React, {useEffect} from "react";
import ReactGA from "react-ga";

const MissionNVision =() => {


    
    useEffect(() => {

        ReactGA.pageview(window.location.pathname);

    }, [])




    return ( <>
    <section className="py-5 bg-light">
        <div className="container-fluid">
        <div className="row main_heading  justify-content-center m-0">
            <div className="col-10" align="center">
                <>
                <h1 className="display-4 HomeWords text-uppercase text-center my-sm-3">Our Mission</h1>
                <hr className="w-25 mx-auto"></hr>
                <p className="col-lg-9 col-sm-8 py-3 text-start aboutContent">At the heart of our mission is a commitment to delivering high-quality products that offer exceptional performance while maintaining affordability. We firmly believe that customer satisfaction is the cornerstone of our success, and to achieve this, we prioritize building and nurturing positive relationships with our customers and suppliers. Our unwavering dedication is to continuously meet and even surpass our customers' expectations in terms of pricing, service, and product quality, ensuring their needs are always met with utmost care.<br/><br/>To stay ahead in the ever-evolving market, we consistently strive to provide products that not only meet but exceed our customers' expectations and market demands. Innovation is at the core of our approach, and we leverage cutting-edge technology and world-class production techniques to craft products of unrivaled quality. Our aim is to be a pioneer in our industry, setting new benchmarks for excellence and redefining what is possible.<br/><br/>Beyond product excellence, we are committed to setting an inspiring example by empowering our employees at all levels. Our company culture encourages and supports their journey towards achieving the highest standards of quality, customer care, and supplier value. By fostering an environment of continuous growth and learning, we ensure that our team is motivated and dedicated to delivering excellence in every aspect of our business. This commitment to empowering our employees is a testament to our values and reinforces our position as an industry leader.</p>
                </>
            </div>
            </div>
            <div className="row main_heading justify-content-center m-0">
            <div className="col-10" align="center">
            <>
                <h1 className="display-4 HomeWords text-uppercase text-center my-sm-3">Our Vision</h1>
                <hr className="w-25 mx-auto"></hr>
                <p className="col-lg-9 col-sm-8 py-3 text-start aboutContent">At our core, sustainability is a driving force behind all our businesses. We are dedicated to achieving the highest levels of environmental purity while ensuring cost-competitiveness. Embracing eco-friendly business practices, we firmly believe that preserving and protecting our natural resources is essential for a sustainable future. By making conscious choices, we contribute to a healthier planet and leave a positive impact on the world.<br/><br/>Our workforce is our most invaluable resource, and we invest in their growth and development. We recognize that in a constantly changing environment, our employees must be equipped to tackle new challenges and embrace innovation. By fostering a culture of learning and empowerment, we create a motivated and skilled team that is ready to drive our businesses forward with passion and dedication.<br/><br/>When it comes to our products, quality is our utmost priority. Every item we manufacture is crafted with our customers' requirements and satisfaction in mind. We strive to go beyond merely meeting expectations by providing products that stand out in terms of performance and value for money. Alongside our high-quality offerings, we are committed to delivering prompt and polite service, ensuring that our customers' experiences with us are exceptional and memorable.</p>
            </>
            </div>
            </div>
            
        
    </div>
    </section>
    </>
    );
};

export default MissionNVision;