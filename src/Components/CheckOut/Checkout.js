import React from 'react'
import { Form,Button } from 'react-bootstrap';
import './CheckOut.css';

const Checkout = () => {
    return (
        <div className="checkOut">
            <span>CHECKOUT</span>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="number" placeholder="Enter Number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Address" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Delivery Date</Form.Label>
                <Form.Control type="text" placeholder="Enter Address" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={()=>alert('You will receive phone call after certain time.')}>
                Submit
            </Button>
            </Form>
        </div>
    )
}

export default Checkout
