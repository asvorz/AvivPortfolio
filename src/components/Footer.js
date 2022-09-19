import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={12} className="text-center text-sm mt-5">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/aviv-sabag-165249192/" target="_blank" rel="noreferrer">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/asvorz" target="_blank" rel="noreferrer">
                <img src={navIcon2} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
