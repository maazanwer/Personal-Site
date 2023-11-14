import { Container, Row, Col, Image } from "react-bootstrap";
import Skill from "./mid-components/skills";
import Content from "./Content";

// The Middlearea is where most of the code and content is written

function MiddlePart() {
  return (
    <>
      <Container className="middle-part">
        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <div className="sizing text-align">
              <Image
                src="images/profile.jpg"
                alt="profile"
                roundedCircle
                className="mid-profile"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <div className="sizing text-align">
              <h4>Hello There,</h4>
              <span id="pun">
                <h6>General Kenobi.&nbsp;&nbsp; sorry.....</h6>
              </span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <div className="sizing text-align">
              <p>
                I consider myself to be a Novice Web Developer. However, I am
                starting my journey and I love the idea of learning new
                technologies along the way to create something unique or{" "}
                <em>quirky</em>.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <hr id="hr" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <div id="skill-heading">
              <h1>My Skills</h1>
            </div>
          </Col>
        </Row>
      </Container>

      <Skill
        style={{ marginRight: "9%" }}
        video="video/coding.mp4"
        heading={Content.Skills[0].heading}
        paragraph={Content.Skills[0].paragraph}
        vidsm="6"
        vidmd="4"
        textmd="8"
        textsm="6"
      />
      <Skill
        style={{ marginLeft: "9%" }}
        video="video/stats.mp4"
        heading={Content.Skills[1].heading}
        paragraph={Content.Skills[1].paragraph}
        vidsm="6"
        vidmd="5"
        textmd="7"
        textsm="6"
      />
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <hr id="hr" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <h2 id="skill-heading">My Knowledge In Web Development</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Skill
              video="video/mongo.mp4"
              Image="images/mongodb.png"
              alt="mongoDB"
              heading={Content.Mern[0].heading}
              paragraph={Content.Mern[0].paragraph}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Skill
              video="video/express.mp4"
              Image="images/express.png"
              alt="Express Js"
              heading={Content.Mern[1].heading}
              paragraph={Content.Mern[1].paragraph}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Skill
              video="video/react.mp4"
              Image="images/react.png"
              alt="React Js"
              heading={Content.Mern[2].heading}
              paragraph={Content.Mern[2].paragraph}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Skill
              video="video/node.mp4"
              Image="images/node.png"
              alt="Node Js"
              heading={Content.Mern[3].heading}
              paragraph={Content.Mern[3].paragraph}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Skill
              video="video/internet.mp4"
              Image="images/internet.png"
              alt="Internet"
              heading={Content.Mern[4].heading}
              paragraph={Content.Mern[4].paragraph}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MiddlePart;
