import React from "react";
import {Form} from "react-bootstrap";
import'./Contact.css'
function Contact(){
    return(
 <div>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <img src="SugerCoffeeLogo.png" alt="logo"/>
   <br/>
   <h1>Contact</h1>
<Form className="content">
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Example select</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
        </div>
    );
}
export default Contact;