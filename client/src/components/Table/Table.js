import React from "react"
import TableRow from "./TableRow/TableRow"

const Table = ({employees}) => {
  return (
    <table dark striped hover >
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
      {employees.map((employee) => (
          <TableRow
            key={employee.id}
            employee={employee}/>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
  