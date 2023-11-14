import {Image,Container} from "react-bootstrap";

function Cv() {
  return (
    <>
      <Container>
        <Container id="margin">
        <h2>My Curriculum Vitae</h2>
        
        
        <p>Below I have just attached my CV as an image for perusal.</p>
        </Container>
        <Container>
          <Image src="images/cv.png" alt="C.V" fluid />
        </Container>
      </Container>
    </>
  );
}
export default Cv;
