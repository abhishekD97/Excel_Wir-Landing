import React, {useState, useEffect} from "react";
import ReactGA from "react-ga";
import Papa from "papaparse";


const ACAR =() => {


  useEffect(() => {

    ReactGA.pageview(window.location.pathname + window.location.search);

}, [])



// DATA1
    const [data, setData] = useState({});
    const movies = Array.from(data);
    const [selectedRows, setSelectedRows] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vQFa32RRoJz6p_pKoJxlg50eGXDwzFgc-5XTvx6EIlYowQwseYbB1BRa7C0BHVEZEK67lDTzzuROy6d/pub?output=csv", {
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
            <h1 className="display-4 HomeWords text-uppercase"> ALL ALUMINUM CONDUCTOR ALLOY REINFORCED &#40;ACAR&#41; </h1>
            <h6 className="text-uppercase"> ASTM B 524 <p className="text-lowercase d-inline">Upto 39 Strands</p> </h6>
            <hr className="w-25 mx-auto"></hr>
        </div>
        <div className="container">

        <div className="row pb-5">

        <p className="text-center px-3 pb-5 fw-lighter">ACAR conductor, or Aluminum Conductor Alloy Reinforced, is a type of overhead electrical conductor that is commonly used in power transmission and distribution. It consists of a stranded aluminum conductor surrounded by one or more layers of aluminum alloy wires. ACAR conductors are known for their high strength-to-weight ratio, which makes them ideal for use in areas with high wind and ice loads. They are also highly resistant to corrosion, which ensures their durability over time. ACAR conductors are often used in areas with harsh weather conditions, and their versatility makes them a popular choice for a wide range of applications.</p>
        <hr className="w-25 mx-auto"></hr>
        </div>


        <div className="row">
        
        {/*  */}
        <div id="no-more-tables">
          <table className="table" onCopy={(e) => e.preventDefault()}>
            <thead>
              <tr>
                <th scope="col">Select</th>
                <th scope="col">Conductor Size &#40;Kcmil&#41;</th>
                <th scope="col">Sectional Area &#40;mm²&#41;</th>
                <th scope="col">Aluminum Wires</th>
                <th scope="col">Aluminum Alloy Wires</th>
                <th scope="col">Wire Dia &#40;mm&#41;</th>
                <th scope="col">Overall Diameter &#40;mm&#41;</th>
                <th scope="col">Weight AL-1350 &#40;Kg/Km&#41;</th>
                <th scope="col">Weight Al-Alloy-6201 &#40;Kg/Km&#41;</th>
                <th scope="col">Total &#40;Kg/Km&#41;</th>
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
                    <td data-label="Conductor Size &#40;Kcmil&#41;">{data.c2}</td>
                    <td data-label="Sectional Area &#40;mm²&#41;">{data.c3}</td>
                    <td data-label="Aluminum Wires">{data.c4}</td>
                    <td data-label="Aluminum Alloy Wires">{data.c5}</td>
                    <td data-label="Wire Dia &#40;mm&#41;">{data.c6}</td>
                    <td data-label="Overall Diameter &#40;mm&#41;">{data.c7}</td>
                    <td data-label="Weight AL-1350 &#40;Kg/Km&#41;">{data.c8}</td>
                    <td data-label="Wt Al-Alloy-6201 &#40;Kg/Km&#41;">{data.c9}</td>
                    <td data-label="Total &#40;Kg/Km&#41;">{data.c10}</td>
                    <td data-label="Rated Strenght &#40;KN&#41;">{data.c11}</td>
                    <td data-label="DC Resistance 20ºC &#40;Ohm/Km&#41;">{data.c12}</td>
                    <td data-label="Current Capacity 75ºC &#40;A&#41;">{data.c13}</td>
                    <td data-label="Current Capacity 85ºC &#40;A&#41;">{data.c14}</td>
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

export default ACAR;