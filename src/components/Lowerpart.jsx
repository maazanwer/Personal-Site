import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';


// As Seen its the footer section.

function Footer(){
return (
    <>
<Container fluid className="footer-main">
<Container className="d-flex align-items-center justify-content-center positioning">
<Row  >
    
    <Col className="padding">
    <a href="https://www.linkedin.com/in/muhammad-maaz-anwer-63105523a"><FontAwesomeIcon icon={faLinkedin} />LinkedIn</a>
    </Col>
    <Col className="padding" >
    <a href="https://github.com/maazanwer"><FontAwesomeIcon icon={faSquareGithub} />GitHub</a></Col>
    <Col style={{width:"150px"}} className="padding">
    <a href="https://www.facebook.com/maaz.anwer.35"><FontAwesomeIcon icon={faFacebook} />Facebook</a>
    </Col >
</Row>
<Row>

</Row>
</Container>
<Container  className="d-flex align-items-center justify-content-center positioning"  >
<Row>
    <Col className="padding">
    <p>©️ 2023 Maaz Anwer, All rights reserved. </p>
    </Col>
</Row>

</Container>

</Container>

    </>
)

}

export default Footer