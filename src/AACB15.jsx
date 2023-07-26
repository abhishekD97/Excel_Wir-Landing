import React, {useState} from "react";
import Papa from "papaparse";


const AACBS215 =() => {
// DATA1
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [selectedRows, setSelectedRows] = useState([]);
    const movies = Array.from(data);

    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vT5n0X8SBUajY1lV9BkMOwRMOmDzK_3uOw4fFjZdKy_h58zFt0yBKKkbrzg1A0PK5eDNSDYAr7Pi3K8/pub?output=csv", {
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
        <section className="main_heading bg-light">
        <div className="container">
        <div className="row">
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
        <div className="row">
        <p className="text-center p-2 fw-bold smallerDesc">NOTE: We also make conductors as per ASTM B231 : 1981, C 49-1965, DIN 48201-5, IEC 207.</p>
        </div>
        </div>
                  

        </section>
    </>
    );
};

export default AACBS215;