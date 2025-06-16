import React, { useState } from "react";
import "./contact.css";
import about from "../../assets/about.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faWhatsapp,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate with email service or backend API
    console.log("Form data:", formData);
    setSubmitted(true);
  };

  return (
    <section className="container contact-section" id="contact">
      <h2>📞 Get in Touch</h2>
      {/* <div className="contact-section1">  */}

      {submitted ? (
        <p className="thank-you">Thank you! We'll get back to you soon.</p>
      ) : (
        <div className="contact-section1">
          <div className="cantact-img-con">
            <img src={about} alt="Contact Us" className="contact-img" />
          </div>
          <div className="contact-form-con">
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </label>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
              <div className="social-icons">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href="https://wa.me/yourwhatsapplink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a
                  href="https://www.tiktok.com/@yourhandle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTiktok} />
                </a>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* </div> */}
    </section>
  );
}
