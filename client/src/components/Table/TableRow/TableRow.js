import React from 'react'
import Link from "react-router-dom/Link"

const TableRow = ({employee}) => {

  let date = new Date(employee.dob.date);
  let year = date.getFullYear();
  let month = date.getMonth()+1;
  let dt = date.getDate();
  if (dt < 10) {
    dt = '0' + dt;
  }
  if (month < 10) {
    month = '0' + month;
  };
  const dob = month+ '-'+ dt+ '-'+year
      return (
          <tr>
          <td><img src={employee.picture.thumbnail}/></td>

          <td> <Link to={"/employees/" + employee._id}> {employee.name.last  + ", " +  employee.name.first} </Link></td>
          <td>{employee.phone}</td>
          <td>{employee.email}</td>
          <td>{dob}</td>
        </tr>
    )
}

export default TableRow;