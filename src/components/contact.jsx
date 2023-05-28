import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  // const [{ name, email, message }, setState] = useState(initialState);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setState((prevState) => ({ ...prevState, [name]: value }));
  // };
  // const clearState = () => setState({ ...initialState });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(name, email, message);

  //   emailjs
  //   .sendForm(
  //     "service_43f1rwq",
  //     "template_nurcys8",
  //     e.target,
  //     "3FKXEN_k7GAGQiQJX"
  //   )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         clearState();
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
              </div>
              <div id="success"></div>
              <a
                href="https://wa.me/+447477182176"
                className="btn btn-custom btn-lg"
              >
                Send Message
              </a>{" "}
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                71, 75 Shelton St, London WC2H 9JQ, UK
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                +44 7477 182176
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
           support@thefither.com
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href="">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/results?search_query=the+fit+her">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 The "Fither LTD . Design by{" "}
            <a href="http://www.thefither.com" rel="nofollow">
              THE FITHER
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
