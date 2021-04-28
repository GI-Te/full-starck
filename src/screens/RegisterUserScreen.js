import {useState,useContext} from "react";
import { Col, Form } from 'react-bootstrap'
import { UserContext } from "../contexts/usersContext";

const RegisterUserScreen = () => {
    const {registerUser}=useContext(UserContext)

    const [name, setName] =useState();
    const [email, setEmail] =useState();
    const [password, setPassword] =useState();

    function handlesubmit(e){
        e.preventDefualt();
        let newuser ={
            name,
            email,
            password
        }
        registerUser(newuser)
    }
    return (
        <div className="justify-content-md-center">
            <Col xs={12} sm={12} md={6} lg={6}>
            <form>
                <Form.Group>
                    <Form.label>name</Form.label>
                    <Form.Control placeholder="enter name"
                     value={name} 
                    onChange ={(text) =>setName(text.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.label>email</Form.label>
                    <Form.Control placeholder="enter email"
                     value={email} 
                    onChange ={(text) =>setEmail(text.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.label>password</Form.label>
                    <Form.Control placeholder="enter password"
                     value={name} 
                    onChange ={(text) =>setPassword(text.target.value)}/>
                </Form.Group>
                <button type="submit">SINGUP</button>
            </form>
            </Col>
        </div>
    )
}

export default RegisterUserScreen
