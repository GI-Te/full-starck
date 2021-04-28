import React from 'react'
import { Form, Container, Button } from "react-bootstrap";

const AddCustomer = () => {
    return (
        <Container>
            <Form style={{ marginTop: "10px" }}>
                <Form.Control placeholder = "enter a name"></Form.Control>
                <Form.Control placeholder = "enter hometown"></Form.Control>
                <Form.Control placeholder = "enter an email"></Form.Control>
                <Form.Control placeholder = "enter occupation"></Form.Control>
                <Button>SAVE</Button>
            </Form>
        </Container>
    );
};

export default AddCustomer;
