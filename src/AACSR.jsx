import React, {useState, useEffect} from "react";
import ReactGA from "react-ga";
import Papa from "papaparse";


const AACSR =() => {


  useEffect(() => {

    ReactGA.pageview(window.location.pathname + window.location.search);

}, [])



// DATA1
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [selectedRows, setSelectedRows] = useState([]);
    const movies = Array.from(data);



    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vRq7moRq2Bep6rGr6JbqNdk2mbpC7Kt4CFuC3qhP0sm2F7nUkXRJN8ItvhlnP_qExa2GIQbc23zWRHH/pub?output=csv", {
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
            <h1 className="display-4 HomeWords text-uppercase"> ALL ALUMINUM ALLOY CONDUCTOR STEEL REINFORCED &#40;AACSR&#41; </h1>
            <h6 className="text-uppercase"> ASTM B 711 <p className="text-lowercase d-inline">Upto 39 Strands</p> </h6>
            <hr className="w-25 mx-auto"></hr>
        </div>
        <div className="container">


        <div className="row pb-5">

        <p className="text-center px-3 pb-5 fw-lighter">AACSR (Aluminum Alloy Conductor Steel Reinforced) conductor is a type of electrical conductor used for power transmission and distribution. It consists of a central steel core surrounded by one or more layers of aluminum alloy strands. The steel core provides mechanical strength to the conductor, while the aluminum strands offer high conductivity. This results in a conductor that is lightweight, strong, and highly efficient. AACSR conductors are commonly used in overhead power transmission lines and are suitable for a wide range of environmental conditions. Contact us to learn more about AACSR conductor and how it can benefit your project.</p>
        <hr className="w-25 mx-auto"></hr>
        </div>


        <div className="row">
        
        {/*  */}
        <div id="no-more-tables">
          <table className="table" onCopy={(e) => e.preventDefault()}>
            <thead>
              <tr>
                <th scope="col">Select</th>
                <th scope="col">Steel Alloy Nominal Area &#40;mm²&#41;</th>
                <th scope="col">Aluminum Conductor Nominal Area &#40;mm²&#41;</th>
                <th scope="col">Total &#40;mm²&#41;</th>
                <th scope="col">Aluminum Wires</th>
                <th scope="col">Steel Wires</th>
                <th scope="col">Aluminum Dia &#40;mm&#41;</th>
                <th scope="col">Steel Dia &#40;mm&#41;</th>
                <th scope="col">Overall Diameter &#40;mm&#41;</th>
                <th scope="col">Weight &#40;Kg/Km&#41;</th>
                <th scope="col">Rated Strength &#40;KN&#41;</th>
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
                  <tr key={data.id} className={selectedRows.includes(data.id) ? 'selected' : ''}>
                    <td>
                    <input
                    type="checkbox"
                    checked={selectedRows.includes(data.id)}
                    onClick={() => handleCheckboxClick(data.id)}
                    />
                    </td>
                    <td data-label="Nom Steel Alloy Area &#40;mm²&#41;">{data.c1}</td>
                    <td data-label="Aluminum Area &#40;mm²&#41;">{data.c2}</td>
                    <td data-label="Total &#40;mm²&#41;">{data.c3}</td>
                    <td data-label="Aluminum Wires">{data.c4}</td>
                    <td data-label="Steel Wires">{data.c5}</td>
                    <td data-label="Aluminum Wire Dia &#40;mm&#41;">{data.c6}</td>
                    <td data-label="Steel Wire Dia &#40;mm&#41;">{data.c7}</td>
                    <td data-label="Overall Dia &#40;mm&#41;">{data.c8}</td>
                    <td data-label="Weight &#40;Kg/Km&#41;">{data.c9}</td>
                    <td data-label="Rated Strenght &#40;KN&#41;">{data.c10}</td>
                    <td data-label="DC Resistance 20ºC &#40;Ohm/Km&#41;">{data.c11}</td>
                    <td data-label="Current Capacity 75ºC &#40;A&#41;">{data.c12}</td>
                    <td data-label="Current Capacity 85ºC &#40;A&#41;">{data.c13}</td>
                  </tr>
                )
                )
                  
                  
                  )}
              
            </tbody>
          </table>
        </div>
    
        </div>
        </div>
        </section>
    </>
    );
};

export default AACSR;