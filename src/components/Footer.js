import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiTwotoneMail,
  AiFillSkype,
} from "react-icons/ai";
import { FaTelegram, FaPlaceOfWorship } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Lukas Müller</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} L.M.</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/GreenCat1996"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                  href="mailto:fat.manfm1111@gmail.com"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noreferrer"
                >
                <AiTwotoneMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://join.skype.com/invite/NtibUyFgexii"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillSkype />
              </a>
            </li>
            <li className="social-icons">
              <a
                  href="https://t.me/superBizz3217"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noreferrer"
                >
                <FaTelegram />
              </a>
            </li>
            <li className="social-icons">
                <a
                  href="https://www.google.com/maps/place/Dortmund,+Germany/@51.5142591,7.4588189,14z/data=!4m6!3m5!1s0x47b91760bff07a11:0x427f28131548750!8m2!3d51.5135872!4d7.4652981!16zL20vMDEzNWsy?authuser=0&entry=ttu"                  
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaPlaceOfWorship />
                </a>
              </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
