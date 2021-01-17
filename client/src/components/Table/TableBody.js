import React from "react"
import TableRow from "./TableRow/TableRow"


const TableBody = ({employees}) => {

  return (
   <>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>
      {employees.map((employee) => (
          <TableRow
            key={employee.id}
            employee={employee}/>
        ))}
      </tbody>
   </>
  );
}
      


export default TableBody;
  