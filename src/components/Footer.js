import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm"; // Ini bisa dihapus atau dikomentari
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* Baris MailchimpForm di bawah ini telah dihapus */}
          
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/yehezkiel-petra-1b89942a7/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://wa.me/6282192719330?text=Halo%20Yehezkiel,%20saya%20sudah%20melihat%20portfolio%20Anda%20dan%20ingin%20berdiskusi." target="_blank" rel="noreferrer"> <img src={navIcon2} alt="WhatsApp" /></a>
              <a href="https://www.instagram.com/yehezkielptra_/" target="_blank" rel="noreferrer">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <p>Copyright 2026. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}