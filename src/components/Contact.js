import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m0zzpe4",
        "template_t2jqnfh",
        form.current,
        "9ddPbYen5BmzV3exd"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 className="container">Get In Touch</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className ="px-1">
                        <input
                          type="text"
                          name="user_name"
                          placeholder="Full Name"
                        />
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          name="user_email"
                          placeholder="Email"
                        />
                      </Col>

                      <Col size={12} className="px-1">
                        <textarea name="message" placeholder="Message" />
                        <input
                          type="submit"
                          value="Send"
                          placeholder="Message"
                        />
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
