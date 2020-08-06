import React from "react";


function Table(props) {
  const style = {
    padding: '0px 10px 0px 10px',
    width: '150px'
  }
  return (
    <table className="table">
      <thead>
        <tr>
          <th style={style} onClick={props.onSort.bind(null, "id")}>
            ID {props.sortField === "id" ? <small>{props.sort}</small> : null}
          </th>
          <th style={style} onClick={props.onSort.bind(null, "firstName")}>
            First Name {props.sortField === "firstName" ? <small>{props.sort}</small> : null}</th>
          <th style={style} onClick={props.onSort.bind(null, "lastName")}>
            Last Name {props.sortField === "lastName" ? <small>{props.sort}</small> : null}</th>
          <th style={style} onClick={props.onSort.bind(null, "email")}>
            E-mail {props.sortField === "email" ? <small>{props.sort}</small> : null}</th>
          <th style={style} onClick={props.onSort.bind(null, "phone")}>
            Phone {props.sortField === "phone" ? <small>{props.sort}</small> : null}</th>
          <th style={style}>Address</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item) => (
          <tr key={item.id + item.phone}
          onClick={props.onRowSelect.bind(null, item)}>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>
              <p>
                <strong>City:</strong> {item.address.city}</p>
              <p>
                <strong>State:</strong> {item.address.state}</p>
             <p>
                <strong>Zip:</strong> {item.address.zip}</p>
              <p>
                <strong>Street:</strong> {item.address.streetAddress}
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Table;
