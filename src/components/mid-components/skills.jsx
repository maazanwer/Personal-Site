import { Container, Row, Col } from "react-bootstrap";
import { useRef, useState } from "react";
import Image from "react-bootstrap/Image";

function Skill(props) {

  // ok so this is the part where the component starts from
 
 
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);
  const [error, setError] = useState(false);
  const [isTouch, setIsTouch] = useState(isTouchDevice());

// It checks whether the device is touch or not
  function isTouchDevice() {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  }



// This checks and sets property when the mouse enters the concerned element
  function handleMouseEnter() {
    if (!isTouch) {
      setPlay(true);
      if (videoRef.current) {
        videoRef.current.load();
        videoRef.current.play().catch((err) => {
          setError(true);
          console.log("Error playing video:", err);
        });
      }
    }
  }

  // This checks and sets property when the mouse leaves the concerned element
  function handleMouseLeave() {
    if (!isTouch) {
      setPlay(false);
      setError(false);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }

  // Your styles here...

  const containerStyle = {
    width: "190px",
    height: "190px",
    borderRadius: "50%",
    overflow: "hidden",
  };
  const videoStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const thumbnailStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  function CircularVideo() {
    // The component employs conditional
    //  rendering based on the presence of props.Image. If this property exists
    // , a container is rendered with dynamic content. Within this container, a video
    //  is displayed if either isTouch or play is true; otherwise, an image is shown.
    //  In the absence of props.Image, a separate container with a video is rendered.
    
    return (
      <>
        {props.Image ? (
          <div
            style={containerStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {console.log(isTouch)}
            {isTouch || play ? (
              <video autoPlay ref={videoRef} loop muted style={videoStyle}>
                <source src={props.video} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={props.Image}
                alt={props.alt}
                style={thumbnailStyle}
                fluid
              />
            )}
          </div>
        ) : (
          <div style={containerStyle}>
            <video autoPlay loop muted style={videoStyle}>
              <source src={props.video} type="video/mp4" />
            </video>
          </div>
        )}
      </>
    );
  }

// The circularvideo component ends here


  return (
    <Container id="skillCard" style={props.style ? props.style : {}}>
      <Row className="d-flex align-items-center">
        <Col
          sm={props.vidsm ? props.vidsm : 6}
          md={props.vidmd ? props.vidmd : 4}
          className="d-flex justify-content-end"
        >
          {/* Video Component Starting */}
          <CircularVideo />
          {/* Video Component Ending   */}
        </Col>
        <Col
          sm={props.textsm ? props.textsm : 6}
          md={props.textmd ? props.textmd : 8}
          className="d-flex justify-content-center"
        >
          <Container>
            <h3
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="code-text"
            >
              {props.heading}
            </h3>
            <p className="code-text">{props.paragraph}</p>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
export default Skill;
