import React, { useState } from 'react'
import Link from "react-router-dom/Link"
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';

const TableRow = ({employee}) => {

  const [show, toggleShow] = useState(false);


  let date = new Date(employee.dob.date);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let dt = date.getDate();
  if (dt < 10) {
    dt = '0' + dt;
  }
  if (month < 10) {
    month = '0' + month;
  };
  const dob = year + '-' + month + '-' + dt
  return (
    <tr >
      <td><img src={employee.picture.thumbnail} /></td>

      <td> <Link to={"/employees/" + employee._id}> {employee.name.last + ", " + employee.name.first} </Link></td>
      <td>{employee.phone}</td>
      <td>
        {!show && <Button variant="info" onClick={() => toggleShow(true)}>Email</Button>}
        <Toast style={{color: "black"}} show={show} onClose={() => toggleShow(false)}>
          <Toast.Header >
            <strong className="mr-auto">Email</strong>
          </Toast.Header>
          <Toast.Body >{employee.email}</Toast.Body>
        </Toast>
      </td>
      <td>{dob}</td>
    </tr>
  )
}

export default TableRow;