import React from 'react'
import Logo from '../images/FireflyIndustry.jpg'
import { Row, Col, Image } from 'react-bootstrap'


const Start = () => {

        return <div className='mtopone'>
                <Row>
                <Col md={7}>
                    <h1 className='mtoptwo leadtag'>Tecnología<span className="home__man"> ideal</span> <br/> para optimizar <span className="home__title-color">la producción</span></h1>
                    <a href="https://wa.me/50433408985"className="buttoncontact">Contactar</a>
                </Col>
                <Col md={5}>
                    <Image src={Logo} width="600px" height="auto" fluid /> 
                </Col>
            </Row>
        </div>
    
}

export default Start
