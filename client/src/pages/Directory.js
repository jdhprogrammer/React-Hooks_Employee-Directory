import React, {useState, useEffect} from "react";
import API from "../utils/API";
import Container from "../components/Container/Container";
import SearchForm from "../components/SearchForm/SearchForm";
// import SearchResults from "../components/SearchResults/SearchResults";
import Alert from "../components/Alert/Alert";
// import Table from "../components/Table/Table";

import Hero from "../components/Hero/Hero"
import Table from "react-bootstrap/Table"
// import TableBody from "../components/Table/TableBody"
import TableRow from "../components/Table/TableRow/TableRow"
import "./Directory.css"


function Directory() {
  const [search, setSearch] = useState(" ");
  const [error, setError] = useState("");
  const [employees, setEmployees] = useState([]);
  const [filtered, setFiltered] = useState([]);

  // const deBouncedSeachTerm = useDebounce(search, 5000)

  const getEmployees = () => {
    API.getEmployees()
    .then(res => {
      if (res.data.length === 0) {
        throw new Error("No results found.");
      }
      if (res.data.status === "error") {
        throw setError(res.data.message);
      }
      setEmployees(res.data);
      setFiltered(res.data);
    })
    .catch(err => console.log(err));
  }
  
  const filterEmployees = () => {
    const filter = employees.filter((employee) => employee.name.first.toLowerCase().includes(search.toLowerCase().trim()) || employee.name.last.toLowerCase().includes(search.toLowerCase().trim()));
    
    setFiltered(filter)
    
    return
  }
  
  useEffect(() => {
  
    if (employees.length === 0) {
      getEmployees();
    }
    else if (!search) {
      setFiltered(employees)
        return;
      }
    else {
     
      filterEmployees(search);
      return;
    }

  }, [search]);
  
  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  // const handleFormSubmit = event => {
  //   event.preventDefault();
  //   console.log(event.target.value)
  //   setSearch(event.target.value)
  //   console.log(search)
  //   searchEmployees(search)
  //   console.log("---- searching employees ----")
  // };

  // -----------------------------------------------------------------------------

  const useSortableData = (filtered, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);
  
    const sortedItems = React.useMemo(() => {
      let sortableItems = [...filtered];
      if (sortConfig !== null) {
        sortableItems.sort((a, b) => {
          const sortA = a[sortConfig.key];
          const sortB = b[sortConfig.key];
          const nameA = sortA["last"];
          const nameB = sortB["last"];
          const dobA = sortA["date"];
          const dobB = sortB["date"];
          if (sortConfig.key === "name") {
            // console.log("here")
            if (nameA < nameB) {
              return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            else if (nameA > nameB) {
              return sortConfig.direction === 'ascending' ? 1 : -1;
            }
          }
          else if (sortConfig.key === "dob") {
            // console.log("here")
            if (dobA < dobB) {
              return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            else if (dobA > dobB) {
              return sortConfig.direction === 'ascending' ? 1 : -1;
            }
          }
          else if (sortA < sortB) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          else if (sortA > sortB) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableItems;
    }, [filtered, sortConfig]);
  
    const requestSort = (key) => {
      
      let direction = 'ascending';
      if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === 'ascending'
      ) {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
    };
  
    return { filtered: sortedItems, requestSort, sortConfig };
  };

  const EmployeeTable = (props) => {
    const { filtered, requestSort, sortConfig } = useSortableData(props. directory);
    const getClassNamesFor = (name) => {
      if (!sortConfig) {
        return;
      }
      return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    return (
      <Table striped hover variant="dark" responsive="sm" >
      {/* <TableBody employees={employees}/> */}
      <thead>
      <tr>
        <th>
          <div>
            Image
          </div>
          </th>
        <th>
          <div
            type="button"
            onClick={() => requestSort('name')}
            className={getClassNamesFor('name')}
          >
            Name
          </div>
          </th>
        <th>
        <div
            type="button"
            onClick={() => requestSort('phone')}
            className={getClassNamesFor('phone')}
          >
            Phone
          </div>
          </th>
        <th>
        <div
            type="button"
            onClick={() => requestSort('email')}
            className={getClassNamesFor('email')}
          >
           Email
          </div>
          </th>
        <th>
        <div
            type="button"
            onClick={() => requestSort('dob')}
            className={getClassNamesFor('dob')}
          >
            DOB
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
    {filtered.map((employee) => (
        <TableRow
          key={employee._id}
          employee={employee}/>
      ))}
    </tbody>
      </Table>
    );
  };
  // -----------------------------------------------------------------------------


  return (
    <div>
      <Hero >
        <h1>Employee Directory</h1>
      
        <h6>Search Employees by name using the Search Bar.</h6> 
        <h6>Click on Employee Name to see more Detail.</h6> 
        <h6>Click on Table Headings to Sort by Name, Phone, etc.</h6>

      </Hero>
      <Container style={{minHeight: "100vh"}}>
        <Alert type="danger" style={{opacity: error ? 1 : 0, marginBottom: 10}}>
          {error}
        </Alert>

        <SearchForm
          handleInputChange={handleInputChange}
          results={search}
          />
        {/* <SearchResults title={title} url={url} />  */}
       <EmployeeTable  directory={filtered}/>
         
      </Container>
    </div>
  );
}

export default Directory;
