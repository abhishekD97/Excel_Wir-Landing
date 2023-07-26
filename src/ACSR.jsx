import React, {useState, useEffect} from "react";
import ReactGA from "react-ga";
import Papa from "papaparse";


const ACSR =() => {


  
  useEffect(() => {

    ReactGA.pageview(window.location.pathname);

}, [])


    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [selectedRows, setSelectedRows] = useState([]);
    const movies = Array.from(data);

    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vRGiS95WU2z9w5OsgsqTQvCx32iA6l7q-DqigYqfXWngsrLlOWxXWajm6epmJZWqlYTjomLfWvpZFQw/pub?output=csv", {
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
            <h1 className="display-4 HomeWords text-uppercase"> aluminum conductor steel reinforced &#40;ACSR&#41; </h1>
            <h6 className="text-uppercase"> IS 398 &#40;PART &#8545;&#41; - 1996 <p className="text-lowercase d-inline">Upto 39 Strands</p> </h6>
            <hr className="w-25 mx-auto"></hr>
        </div>
        <div className="container">

        <div className="row pb-5">

        <p className="text-center px-3 pb-5 fw-lighter">ACSR (Aluminum Conductor Steel Reinforced) is a type of high-capacity, high-strength stranded conductor made from aluminum and steel wires. It is widely used in power transmission and distribution lines due to its excellent mechanical strength, high conductivity, and low weight. Our ACSR conductors are manufactured using high-quality raw materials and state-of-the-art technology, ensuring superior quality and reliability. As a leading ACSR conductor manufacturer, we offer a wide range of products to meet the diverse needs of our customers. Contact us today to learn more about our ACSR conductors and how they can benefit your power transmission and distribution projects.</p>
        <hr className="w-25 mx-auto"></hr>
        </div>

        <div className="row">
        
        {/*  */}
        <div id="no-more-tables">
          <table className="table" onCopy={(e) => e.preventDefault()} >
            <thead>
              <tr>
                <th scope="col">Select</th>
                <th scope="col">Code</th>
                <th scope="col">Nominal Aluminum Area &#40;mm²&#41;</th>
                <th scope="col">Aluminum Stranding</th>
                <th scope="col">Aluminum Wire Dia &#40;mm&#41;</th>
                <th scope="col">Steel Stranding</th>
                <th scope="col">Steel Wire Dia &#40;mm&#41;</th>
                <th scope="col">Aluminum Area &#40;mm²&#41;</th>
                <th scope="col">Area of Complete Conductor &#40;mm²&#41;</th>
                <th scope="col">Overall Dia &#40;mm&#41;</th>
                <th scope="col">Ultimate Tensile Strength &#40;KGs&#41;</th>
                <th scope="col">Resistance At 20ºC &#40;Ohm/Km&#41;</th>
                <th scope="col">Total Weight &#40;Kg/Km&#41;</th>
                <th scope="col">Aluminum Weight &#40;Kg/Km&#41;</th>
                <th scope="col">Steel Weight &#40;Kg/Km&#41;</th>
              </tr>
            </thead>
            <tbody>
              
                { isLoading ? (
                  <tr>
                    <td colSpan="15" className="text-center">Loading...</td>
                  </tr>
                ) : (
                  movies.map((data) => (
                    <tr key={data.Code} className={selectedRows.includes(data.Code) ? 'selected' : ''}>
                    <td>
                    <input
                    type="checkbox"
                    checked={selectedRows.includes(data.Code)}
                    onClick={() => handleCheckboxClick(data.Code)}
                    />
                    </td>
                    <td data-label="Code">{data.Code}</td>
                    <td data-label="Copper Area &#40;mm²&#41;">{data.NomCopArea}</td>
                    <td data-label="Aluminum Stranding">{data.c3}</td>
                    <td data-label="Aluminum Wire Dia &#40;mm&#41;">{data.c4}</td>
                    <td data-label="Steel Stranding">{data.c5}</td>
                    <td data-label="Steel Wire Dia &#40;mm&#41;">{data.c6}</td>
                    <td data-label="Aluminum Area &#40;mm²&#41;">{data.c7}</td>
                    <td data-label="Total Conductor Area &#40;mm²&#41;">{data.c8}</td>
                    <td data-label="Overall Dia &#40;mm&#41;">{data.c9}</td>
                    <td data-label="Ultimate Tensile Strength &#40;KGs&#41;">{data.c10}</td>
                    <td data-label="Resistance At 20ºC &#40;Ohm/Km&#41;">{data.c11}</td>
                    <td data-label="Total Weight &#40;Kg/Km&#41;">{data.c12}</td>
                    <td data-label="Aluminum Weight &#40;Kg/Km&#41;">{data.c13}</td>
                    <td data-label="Steel Weight &#40;Kg/Km&#41;">{data.c14}</td>
                  </tr>
                )
                )
                  
                  
                  )}
              
            </tbody>
          </table>
        </div>
    
        </div>   
        <div className="row">
        <p className="text-center p-2 smallerDesc fw-semibold">NOTE: We also make conductors as per ASTM B232 : 1981, C 49-1965, DIN 48204, IEC 209, BS 215 Part 2</p>
        </div>
        </div>
        </section>
    </>
    );
};

export default ACSR;