import React from "react";

const Footer =() => {



    return ( <>
        <footer className="site-footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 px-4 col-md-4">
            <h6>Excel Wires and Conductors</h6>
            <p className="text-justify">We specialize in the production of overhead conductors for the electricity transmission and distribution industry. <br/><br/>Our high-quality products are designed to meet the specific needs of our customers and are manufactured using the latest technology. We are dedicated to providing reliable and durable solutions for overhead conductor needs</p>
          </div>

          <div className="col-xs-6 col-md-3 ms-auto px-4">
            <h6>Products</h6>
            <ul className="footer-links">
              <li><a href="/products/acsr">ACSR</a></li>
              <li><a href="/products/aac">AAC</a></li>
              <li><a href="/products/aaac">AAAC</a></li>
              <li><a href="/products/aacsr">AACSR</a></li>
              <li><a href="/products/acar">ACAR</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-4 px-4">
            <h6>Contact</h6>
            <ul className="footer-links pt-2">
              <li><>Plot Number 57</></li>
              <li><>Belur Industrial Growth Center</></li>
              <li><>Belur, Dharwad</></li>
              <li><>Karnataka - 580011</></li>
              <li>Ph : +91-9448114041</li>
              <li>Email : excelwiresandconductors@gmail.com</li>
              <li>Find Us At :  &nbsp;
              <a href="https://goo.gl/maps/5Rh7vD1N9aQZNQEq7">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-pin-map-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
              <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
              </svg>
              </a>
              </li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; {(new Date().getFullYear())} All Rights Reserved Excel Wires and Conductors
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              {/* <li><a className="facebook" href="/#"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="/#"><i className="fa fa-twitter"></i></a></li>
              <li><a className="dribbble" href="/#"><i className="fa fa-dribbble"></i></a></li>
              <li><a className="linkedin" href="/#"><i className="fa fa-linkedin"></i></a></li>  */}
            </ul>
          </div>
        </div>
      </div>
</footer>
    </>
    );
};

export default Footer;