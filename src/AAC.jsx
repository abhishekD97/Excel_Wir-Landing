import React, {useState, useEffect} from "react";
import ReactGA from "react-ga";
import Papa from "papaparse";
import AACBS215 from "./AACB15";


const AAC =() => {


  
  useEffect(() => {

    ReactGA.pageview(window.location.pathname);

}, [])



// DATA1
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [selectedRows, setSelectedRows] = useState([]);
    const movies = Array.from(data);

    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTRlk9UjOL3E8zWU6HgGS6tmjxDpxVufGlU0hjZOrempWoPE_ex7C9uCrVUqdfZEbHjycwtp6Viid2R/pub?output=csv", {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
        setIsLoading(false);
      },
    });

    const handleCheckboxClick = (code) => {
    if (selectedRows.includes(code)) {
      setSelectedRows(selectedRows.filter((c) => c !== code));
    } else {
      setSelectedRows([...selectedRows, code]);
    }
    };


    return ( 
    <>        
        <section className="main_heading py-5 bg-light">
        <div className="text-center py-5">
            <h1 className="display-4 HomeWords text-uppercase"> all aluminum conductor &#40;AAC&#41; </h1>
            <h6 className="text-uppercase"> IS 398 &#40;PART 	&#8544;&#41; <p className="text-lowercase d-inline">Upto 39 Strands</p> </h6>
            <hr className="w-25 mx-auto"></hr>
        </div>
        <div className="container">

        <div className="row pb-5">

        <p className="text-center px-3 pb-5 fw-lighter">AAC conductor is a type of bare overhead cable made of aluminum strands. It is a lightweight and cost-effective option for transmitting electricity over short distances. AAC conductor is commonly used in urban areas for distributing power to homes and businesses. Its high conductivity and low weight make it an efficient solution for power transmission. If you are looking for an affordable and reliable power transmission option, consider using AAC conductor.</p>
        <hr className="w-25 mx-auto"></hr>
        </div>


        <div className="row">
        
        {/*  */}
        <div id="no-more-tables">
          <table className="table" onCopy={(e) => e.preventDefault()}>
            <thead>
              <tr>
                <th scope="col">Select</th>
                <th scope="col">Nominal Aluminum Area &#40;mm²&#41;</th>
                <th scope="col">Sectional Area &#40;mm²&#41;</th>
                <th scope="col">Aluminum Stranding</th>
                <th scope="col">Aluminum Wire Dia&#40;mm&#41;</th>
                <th scope="col">Overall Dia &#40;mm&#41;</th>
                <th scope="col">Weight &#40;Kg/m&#41;</th>
                <th scope="col">Rated Strenght &#40;KN&#41;</th>
                <th scope="col">DC Resistance At 20ºC &#40;Ohm/Km&#41;</th>
                <th scope="col">Current Capacity At 75ºC &#40;A&#41;</th>
                <th scope="col">Current Capacity At 85ºC &#40;A&#41;</th>
              </tr>
            </thead>
            <tbody>
              
                { isLoading ? (
                  <tr>
                    <td colSpan="15" className="text-center">Loading...</td>
                  </tr>
                ) : (
                  movies.map((data) => (
                  <tr key={data.c1} className={selectedRows.includes(data.c1) ? 'selected' : ''}>
                    <td>
                    <input
                    type="checkbox"
                    checked={selectedRows.includes(data.c1)}
                    onClick={() => handleCheckboxClick(data.c1)}
                    />
                    </td>
                    <td data-label="Aluminum Area &#40;mm²&#41;">{data.c1}</td>
                    <td data-label="Sectional Area &#40;mm²&#41;">{data.c2}</td>
                    <td data-label="Aluminum Stranding">{data.c3}</td>
                    <td data-label="Aluminum Wire Dia &#40;mm&#41;">{data.c4}</td>
                    <td data-label="Overall Dia &#40;mm&#41;">{data.c5}</td>
                    <td data-label="Weight &#40;Kg/m&#41;">{data.c6}</td>
                    <td data-label="Rated Strenght &#40;KN&#41;">{data.c7}</td>
                    <td data-label="DC Resistance 20ºC &#40;Ohm/Km&#41;">{data.c8}</td>
                    <td data-label="Current Capacity 75ºC &#40;A&#41;">{data.c9}</td>
                    <td data-label="Current Capacity 85ºC &#40;A&#41;">{data.c10}</td>
                  </tr>
                )
                )
                  
                  
                  )}
              
            </tbody>
          </table>
        </div>
    
        </div>
        </div>

        <div className="text-center pt-5 pb-1">
            <h6 className="text-uppercase"> BS 215 &#40;PART 	&#8544;&#41; <p className="text-lowercase d-inline">Upto 39 Strands</p> </h6>
            
        </div>
        <AACBS215/>

        </section>
    </>
    );
};

export default AAC;