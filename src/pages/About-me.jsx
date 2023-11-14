import { Container, Row,Col } from "react-bootstrap"
import Content from "../components/Content"
function About(){
return(
<Container>
<ul>
    <h1 className="heading">
        About Me
    </h1>
<Container>
<h2>
   <li> {Content.About[0].heading}</li>
</h2>
<p>
{Content.About[0].paragraph}
</p>
</Container>
<Container>
    <Row><Col className="d-flex justify-content-center"><hr id="hr"/></Col></Row>
<h2>
 <li> {Content.About[1].heading}</li>
</h2>
<ul>
<h4 className="heading">
<li>{Content.About[2].subheading.h4} </li></h4>
<h5 className="margin">{Content.About[2].subheading.h5F}</h5>
<h5 className="margin">{Content.About[2].subheading.h5s}</h5>
<p className="p">{Content.About[2].paragraph}
</p>

<h4 className="heading"> <li>{Content.About[3].subheading.h4}</li></h4>
<h5 className="margin">{Content.About[3].subheading.h5f}</h5>
<h5 className="margin">{Content.About[3].subheading.h5s}</h5>
<p className="p">{Content.About[3].paragraph}
</p>
</ul>

</Container>
<Container >
    <Row><Col className="d-flex justify-content-center"><hr id="hr"/></Col></Row>

<h2 >
   <li>{Content.About[4].heading} </li>
</h2>
<p className="p">
{Content.About[4].paragraph}
</p>

</Container>
</ul>
</Container>

)
}
export default About