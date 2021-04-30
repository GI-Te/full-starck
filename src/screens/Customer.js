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
              <th>location</th>
              <th>EMAIL</th>
              <th>service</th>
              <th>PHONE</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer._id}>
                <td>{customer.name}</td>
                <td>{customer.location}</td>
                <td>{customer.email}</td>
                <td>{customer.service}</td>
                <td>{customer.phone}</td>
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
