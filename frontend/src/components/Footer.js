import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className="footer font-small pt-4 mt-5 foot">
            <Container fluid className="text-center">
                <Row>
                    <Col md={6}>
                        <h5 className="title">Firefly Industry</h5>
                        <p className="lead text-light">
                            Biotecnología orientada al desarrollo
                        <br/>
                        PBX: 33408985
                        </p>
                    </Col>
                    <Col md={6}>
                        <h5 className="title">Francisco Morazán</h5>
                        <p className="lead text-light">
                        Tegucigalpa, Honduras
                        </p>
                    </Col>
                </Row>
            </Container>
            <div className="footer-copyright text-center py-3">
            <Container className="footersocial">
            <a href="https://es-la.facebook.com/FireflyIndustry/" target="_blank" rel="noreferrer" className="footer__icon"><i className="fab fa-facebook"></i></a>
            <a href="https://instagram.com/fireflyindustry" target="_blank" rel="noreferrer" className="footer__icon"><i className="fab fa-instagram"></i></a>
            <a href="https://wa.me/50433408985" target="_blank" rel="noreferrer" className="footer__icon"><i className="fab fa-whatsapp"></i></a>
            </Container>
            <Container fluid>
                {new Date().getFullYear()} Firefly Industry S. de R.L. Derechos Reservados &copy;
            </Container>
            </div>
            </footer>     
    )
}

export default Footer
