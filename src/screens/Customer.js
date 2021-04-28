import { useContext, useEffect } from "react";
import { Spinner, Table } from "react-bootstrap";
import { CustomersContext } from "../contexts/CustomersContext";
import { FiDelete, FiEdit, FiEye } from "react-icons/fi";

const Customers = () => {
  const { loading, customers, getCustomers } = useContext(CustomersContext);

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <section>
      {loading && <Spinner animation="grow" />}
      {customers.length > 0 ? (
        <Table className="table-hover table-striped">
          <thead>
            <tr>
              <th>NAME</th>
              <th>HOMETOWN</th>
              <th>EMAIL</th>
              <th>OCCUPATION</th>
              <th>EDIT</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer._id}>
                <td>{customer.name}</td>
                <td>{customer.hometown}</td>
                <td>{customer.email}</td>
                <td>{customer.occupation}</td>
                <td>
                  <FiDelete /> <FiEdit /> <FiEye />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        !loading && <h1>NO RECORDS</h1>
      )}
    </section>
  );
};

export default Customers;
