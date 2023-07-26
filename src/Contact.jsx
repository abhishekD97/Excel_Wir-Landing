// import React, { useRef, useState, useEffect } from "react";
// import ReactGA from "react-ga";
// import emailjs from "@emailjs/browser";


// const Contact =() => {


//   useEffect(() => {

//     ReactGA.pageview(window.location.pathname);

// }, [])



//     const [user_name, setFirstname] = useState('');
//     const [user_lastname, setLastname] = useState('');
//     const [user_email, setEmail] = useState('');
//     const [user_subject, setSubject] = useState('');
//     const [user_message, setMessage] = useState('');



//     function SubmitButton(){
//         if (user_name && user_lastname && user_email && user_subject && user_message){
//           return <input type="submit" className="form-control mx-auto"></input>
//         } else {
//           return <input type="submit" className="form-control mx-auto" disabled></input>
//         };
//       };



//     const form = useRef();

//     const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_p2dnz4e', 'template_57weynt', form.current, 'VkiRlWdg27w0JlQqJ')
//       .then((result) => {
//         console.log(result.text);
//         console.log("Success")}, 
//         (error) => {
//           console.log(error.text);
//                     });
//         };

//     return ( 
//     <>        
//         <section className="main_heading py-5">
//         <div className="text-center pb-5">
//             <h1 className="display-4 HomeWords text-uppercase"> Contact Us </h1>
//             <hr className="w-25 mx-auto ahr"></hr>
//         </div>
//         <div className="container">
//         <div className="row">
//         <div className="mx-md-auto mx-auto">
//         <form ref={form} onSubmit={sendEmail}>
        
//         <input autoComplete="off" value={user_name} onChange={ e => setFirstname(e.target.value)} type="text" placeholder="NAME" className="form-control text-center mx-auto mb-2" name="user_name" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        
        
//         <input autoComplete="off" value={user_lastname} onChange={ e => setLastname(e.target.value)} type="text" placeholder="LAST NAME" className="form-control text-center mx-auto mb-2" name="user_lastName" id="exampleInputPassword1"/>
        
//         <input autoComplete="nope" value={user_email} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onChange={ e => setEmail(e.target.value)} placeholder="EMAIL" type="email" name="user_email" className="form-control mx-auto text-center mb-2 col-xxl-8 col-md-8 col-sm-7" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        
//         <input autoComplete="off" value={user_subject} onChange={ e => setSubject(e.target.value)} type="text" placeholder="SUBJECT" name="user_subject" className="form-control mx-auto text-center mb-2" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        
        
        
//         <textarea autoComplete="off" value={user_message} onChange={ e => setMessage(e.target.value)} placeholder="MESSAGE" className="form-control mx-auto text-center mb-2" name="user_message" id="exampleFormControlTextarea1" rows="3"></textarea>
        
        
//         <SubmitButton/>
        
//         </form>
//         </div>

//         </div>
//         <div className="row px-5 pt-5">
//         <div class="mapouter"><div class="gmap_canvas"><iframe title="Location Tag" class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=436&amp;height=399&amp;hl=en&amp;q=excel wires and conductors&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div></div>
//         </div>
            
//         </div>
//         </section>
//     </>
//     );
// };

// export default Contact;

import React, { useRef, useState, useEffect } from "react";
import ReactGA from "react-ga";
import emailjs from "emailjs-com";

const Contact = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const [user_name, setFirstname] = useState('');
  const [user_email, setEmail] = useState('');
  const [user_subject, setSubject] = useState('');
  const [user_message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useRef();

  function SubmitButton() {
    if (user_name && user_email && user_message) {
      return <input type="submit" className="form-control mx-auto" value={isSubmitted ? "Done, Thank you" : "Submit"} />;
    } else {
      return <input type="submit" className="form-control mx-auto" disabled value="Submit" />;
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_p2dnz4e", "template_57weynt", form.current, "VkiRlWdg27w0JlQqJ")
      .then((result) => {
        console.log(result.text);
        console.log("Success");
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };


  return (
    <>
      <section className="main_heading py-5">
        <div className="text-center pb-5">
          <h1 className="display-4 HomeWords text-uppercase"> Contact Us </h1>
          <hr className="w-25 mx-auto ahr" />
          <p><strong>excelwiresandconductors@gmail.com</strong></p>
        </div>
        <div className="container">
          <div className="row">
            <div className="mx-md-auto mx-auto">
              <form ref={form} onSubmit={sendEmail}>
                <input autoComplete="off" value={user_name} onChange={(e) => setFirstname(e.target.value)} type="text" placeholder="NAME" className="form-control text-center mx-auto mb-2" name="user_name" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <input autoComplete="nope" value={user_email} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onChange={(e) => setEmail(e.target.value)} placeholder="EMAIL" type="email" name="user_email" className="form-control mx-auto text-center mb-2 col-xxl-8 col-md-8 col-sm-7" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <input autoComplete="off" value={user_subject} onChange={(e) => setSubject(e.target.value)} type="text" placeholder="SUBJECT" name="user_subject" className="form-control mx-auto text-center mb-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <textarea autoComplete="off" value={user_message} onChange={(e) => setMessage(e.target.value)} placeholder="MESSAGE" className="form-control mx-auto text-center mb-2" name="user_message" id="exampleFormControlTextarea1" rows="3"></textarea>
                <SubmitButton />
              </form>
            </div>
          </div>
          <div className="row px-5 pt-5">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  title="Location Tag"
                  className="gmap_iframe"
                  width="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7689.158306589196!2d74.91259789972334!3d15.507053142590758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf3379b4cb4de7%3A0xe0966f45e64fbaba!2sExcel%20Wires%20and%20Conductors!5e0!3m2!1sen!2sin!4v1689443296800!5m2!1sen!2sin"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
