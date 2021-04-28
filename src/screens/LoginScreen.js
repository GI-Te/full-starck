import { useState, useContext } from "react";
import { Button, Form } from 'react-bootstrap'
import { UserContext } from "../contexts/usersContext";

const LoginScreen = () => {
  const { loginUser } = useContext(initUserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const loginuser = {
      email,
      password,
    };
    loginUser(loginuser);
  }
  return (
    <div
      style={{
        height: "80vh",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "50%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          gridTemplateColumns: "1fr",
          gridGap: 20,
          padding: "20px",
          border: "1px solid white",
        }}
      >
        <h1 className="text-center">LOG IN</h1>
        <Form.Control
          placeholder="enter email"
          value={email}
          onchange={(e) => setEmail(e.target.value)}
        />
        <Form.Control
          placeholder="enter password"
          value={password}
          onchange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">LOG IN</Button>
      </Form>
    </div>
  );
};

export default LoginScreen;
