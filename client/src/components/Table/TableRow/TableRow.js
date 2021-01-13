import React from 'react'

const TableRow = ({employee}) => {
    return (
        <tr>
        <td>Image</td>
        <td>{employee.name.first + " " + employee.name.last}</td>
        <td>{employee.phone}</td>
        <td>{employee.email}</td>
        <td>{employee.dob.date}</td>
      </tr>
    )
}

export default TableRow;