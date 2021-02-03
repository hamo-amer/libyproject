import React from "react";
// import {Navbar,Nav,Form } from "react-bootstrap";
import { FaHeart,FaCartArrowDown } from 'react-icons/fa';
import { faFacebookF , faTwitter , faInstagram , faSnapchat} from "@fortawesome/free-brands-svg-icons";
import { faCartArrowDown} from "@fortawesome/free-solid-svg-icons";
import { faUser , faHeart} from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'
import {CardGroup,Card } from "react-bootstrap";

import "./Gallery.css";
function Gallery(){
      //This line explains how to document and run social media logos using fontawesome
  library.add(faFacebookF , faTwitter ,faInstagram ,faSnapchat,faUser ,faHeart ); 
    return(
        <div>
          <h1>Products</h1>
          <p style={{fontSize:"50px"}}>cheese cake</p>
   <div className="CardGroup">
<CardGroup >
  <Card>
    <Card.Img variant="top" src="imggallery/cheesecake/Cherries.png" />
    <Card.Body>
      <Card.Title>Cherries</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">
      {/* <FontAwesomeIcon icon={['fas','faHeart']}/> 
    <FontAwesomeIcon icon={['fas','faCartArrowDown']}/> */}
    <FaHeart />
    <FaCartArrowDown />
      </small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="imggallery/cheesecake/Hazelnut.png" />
    <Card.Body>
      <Card.Title>Hazelnut</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="imggallery/cheesecake/Lotus.png" />
    <Card.Body>
      <Card.Title>Lotus</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
<br/>
<br/>
<CardGroup>
  <Card>
    <Card.Img variant="top" src="imggallery/cheesecake/Pistachio.png" />
    <Card.Body>
      <Card.Title>Pistachio</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="imggallery/cheesecake/lamon.jpg" />
    <Card.Body>
      <Card.Title>lamon</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="imggallery/cheesecake/Blueberry.png" />
    <Card.Body>
      <Card.Title>Blueberry</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
<br/>
    <h1>cupcake</h1>
    <br/>
    <CardGroup >
  <Card>
    <Card.Img variant="top" src="imggallery/cupcake/cup1.png" />
    <Card.Body>
      <Card.Title>Peanut cup cake</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="imggallery/cupcake/cup2.png" />
    <Card.Body>
      <Card.Title>Chocolate cupcake</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="imggallery/cupcake/cup3.png" />
    <Card.Body>
      <Card.Title>Cupcake red berries</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
<br/>
<br/>
<CardGroup>
  <Card>
    <Card.Img variant="top" src="imggallery/cupcake/cup4.png" />
    <Card.Body>
      <Card.Title>Red velvet cupcake</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="imggallery/cupcake/cup5.png" />
    <Card.Body>
      <Card.Title>Lotus cupcake</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="imggallery/cupcake/cup6.png" />
    <Card.Body>
      <Card.Title>Vanilla cup cake</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
</div>

        </div>
    );
}
export default Gallery;