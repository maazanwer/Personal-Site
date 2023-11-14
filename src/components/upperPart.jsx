import { Container, Row, Col, Image } from "react-bootstrap";

// I made this component just to show the upper container that has my name
//  , clouds and mountain for visual purpose.

function upperPart() {
  return (
    <Container fluid className="main">
      <Container className="upper-container">
        <Container>
          <Row>
            <Col md={3} className="img-cloud1 d-flex justify-content-start ">
              <Image className="" src="images/cloud2.png" fluid />
            </Col>

            <div className="custom-container">
              <div className="centering">
                <Image src="images/name2.png" height={85} width={350} fluid />
              </div>
              <div className="centering">
                <p>A Web Developer.</p>
              </div>
            </div>

            <Col
              className="img-cloud2 d-flex justify-content-end
                  "
            >
              <Image src="images/cloud2.png" fluid />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <Image src="images/mountain.png" fluid className="img-mountain" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default upperPart;
