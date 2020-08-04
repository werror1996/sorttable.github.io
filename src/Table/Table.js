import React from "react";
function Table(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>E-mail</th>
          <th>Phone</th>
          <th>Phone</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item) => (
          <tr key={item.id + item.phone}>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>
              <p><strong>City:</strong> {item.address.city}</p>
              <p><strong>State:</strong> {item.address.state}</p>
              <p><strong>Zip:</strong> {item.address.zip}</p>
              <p><strong>Street:</strong> {item.address.streetAddress}</p>
            </td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Table;
