import React,{ useEffect, useState} from "react";
import ReactGA from "react-ga";
import Papa from "papaparse";


const ACSR =() => {


  useEffect(() => {

    ReactGA.pageview(window.location.pathname + window.location.search);

}, [])



    const [data, setData] = useState({});
    const movies = Array.from(data);
    const [selectedRows1, setSelectedRows1] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vQrEh6TQ_66FEnOVdZE2Alq2bkmQzuAwoVj0txaMNGO3qKBDpR1OTG__pYmikJxql324Kh3h4ZymK2t/pub?output=csv", {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
        setIsLoading(false);
      },
    });
    

    const handleCheckboxClick1 = (code) => {
    if (selectedRows1.includes(code)) {
      setSelectedRows1(selectedRows1.filter((c) => c !== code));
    } else {
      setSelectedRows1([...selectedRows1, code]);
    }
    };

    return ( 
    <>        
        <section className="main_heading py-5 bg-light">
        <div className="text-center py-5">
            <h1 className="display-4 HomeWords text-uppercase"> all aluminum alloy conductor &#40;AAAC&#41; </h1>
            <h6 className="text-uppercase"> IS 398 &#40;PART &#8547;&#41; - 1996 <p className="text-lowercase d-inline">Upto 39 Strands</p> </h6>
            <hr className="w-25 mx-auto"></hr>
        </div>
        <div className="container">

        <div className="row pb-5">

        <p className="text-center px-3 pb-5 fw-lighter">AAAC (All Aluminum Alloy Conductor) is a high-strength and lightweight conductor made from aluminum alloy wires. It is an ideal choice for overhead power transmission and distribution lines. AAAC conductors offer several advantages over traditional ACSR (Aluminum Conductor Steel Reinforced) conductors, such as higher corrosion resistance, better conductivity, and lower installation costs. These properties make AAAC conductors a popular choice for use in a variety of environments and applications.</p>
        <hr className="w-25 mx-auto"></hr>
        </div>



        <div className="row">
        
        {/*  */}
        <div id="no-more-tables">
          <table className="table" onCopy={(e) => e.preventDefault()}>
            <thead>
              <tr>
                <th scope="col">Select</th>
                <th scope="col">Actual Area &#40;mm²&#41;</th>
                <th scope="col">Aluminum Stranding</th>
                <th scope="col">Aluminum Wire Dia &#40;mm&#41;</th>
                <th scope="col">Overall Dia &#40;mm&#41;</th>
                <th scope="col">Weight &#40;Kg/Km&#41;</th>
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
                  <tr key={data.id} className={selectedRows1.includes(data.id) ? 'selected' : ''}>
                    <td>
                    <input
                    type="checkbox"
                    checked={selectedRows1.includes(data.id)}
                    onClick={() => handleCheckboxClick1(data.id)}
                    />
                    </td>
                    <td data-label="Actual Area &#40;mm²&#41;">{data.c1}</td>
                    <td data-label="Aluminum Stranding">{data.c2}</td>
                    <td data-label="Aluminum Wire Dia &#40;mm&#41;">{data.c3}</td>
                    <td data-label="Overall Dia &#40;mm&#41;">{data.c4}</td>
                    <td data-label="Weight &#40;Kg/Km&#41;">{data.c5}</td>
                    <td data-label="Rated Strenght &#40;KN&#41;">{data.c6}</td>
                    <td data-label="DC Resistance 20ºC &#40;Ohm/Km&#41;">{data.c7}</td>
                    <td data-label="Current Capacity 75ºC &#40;A&#41;">{data.c8}</td>
                    <td data-label="Current Capacity 85ºC &#40;A&#41;">{data.c9}</td>
                  </tr>
                )
                )
                  
                  
                  )}
              
            </tbody>
          </table>
        </div>
    
        </div>   
        <div className="row">
        <p className="text-center p-2 smallerDesc fw-semibold">NOTE: We also make conductors as per ASTM B399 : 1981, C 49-1965, DIN : 48201-6, BS 3242: 1970</p>
        </div>
        </div>
        </section>
    </>
    );
};

export default ACSR;