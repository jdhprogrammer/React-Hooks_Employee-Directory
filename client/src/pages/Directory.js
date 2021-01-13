import React, {useState, useEffect} from "react";
import API from "../utils/API";
import Container from "../components/Container/Container";
import SearchForm from "../components/SearchForm/SearchForm";
import SearchResults from "../components/SearchResults/SearchResults";
import Alert from "../components/Alert/Alert";
import Table from "../components/Table/Table";

import Hero from "../components/Hero/Hero"

function Directory() {
  const [search, setSearch] = useState("");
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
        throw new Error(res.data.message);
      }
      setEmployees(res.data);
      console.log(employees)
    })
    .catch(err => console.log(err));
  }
  
  const searchEmployees = (search) => {
    setFiltered(employees.filter((employee) => {
      employee.name.first.includes(search) 
      || employee.name.last.includes(search)
    }));
  }
  
  useEffect(() => {
    if (!employees){
    getEmployees();
    return;
    }
    searchEmployees(search)
  }, [search]);

  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <Hero backgroundImage="">
        <h1>Employee Directory</h1>
        <h2>Search for Employees &amp; Sort Them!</h2>
      </Hero>
      <Container style={{minHeight: "100vh"}}>
        {/* <h1 className="text-center">Search For Anything on Wikipedia</h1> */}
        <Alert type="danger" style={{opacity: error ? 1 : 0, marginBottom: 10}}>
          {error}
        </Alert>
        <SearchForm
          handleInputChange={handleInputChange}
          search={search}/>
        {/* <SearchResults title={title} url={url} /> */}
        <Table employees={filtered}>
        </Table>
      </Container>
    </div>
  );
}

export default Directory;
