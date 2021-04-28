import "./App.css";
import { Route, Switch } from "react-router-dom";
import AddCustomer from "./screens/AddCustomer";
import Customer from "./screens/Customer";
import Header from "./components/Header";
import Home from "./screens/Home";
import { Container } from "react-bootstrap";
import LoginScreen from "./screens/LoginScreen";
import RegisterUserScreen from "./screens/RegisterUserScreen";

function App() {
  return (
    <main>
      <Header />
      <Container>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/customer" component={Customer} />
          <Route path="/addcustomer" component={AddCustomer} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/singup" component={RegisterUserScreen} />
        </Switch>
      </Container>
    </main>
  );
}

export default App;
