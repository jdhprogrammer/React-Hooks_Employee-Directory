import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Container from "../components/Container/Container";
import SearchForm from "../components/SearchForm/SearchForm";
import SearchResults from "../components/SearchResults/SearchResults";
import Alert from "../components/Alert/Alert";
import Table from "../components/Table/Table";
import useDebounce from "../utils/useDebounce"
import Hero from "../components/Hero/Hero"

function Search() {
  const [search, setSearch] = useState("Wikipedia");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const deBouncedSeachTerm = useDebounce(search, 5000)

  useEffect(() => {
    if (!deBouncedSeachTerm) {
      return;
    }

    API.searchTerms(deBouncedSeachTerm)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setTitle(res.data[1][0]);
        setUrl(res.data[3][0]);
      })
      .catch(err => setError(err));
  }, [deBouncedSeachTerm]);

  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  return (
    <div>
        <Hero backgroundImage="">
        <h1>Employee Directory</h1>
        <h2>Search for Employees &amp; Sort Them!</h2>
      </Hero>
      <Container style={{ minHeight: "100vh" }}>
        {/* <h1 className="text-center">Search For Anything on Wikipedia</h1> */}
        <Alert type="danger" style={{ opacity: error ? 1 : 0, marginBottom: 10 }}>
          {error}
        </Alert>
        <SearchForm
          handleInputChange={handleInputChange}
          results={search}
        />
        {/* <SearchResults title={title} url={url} /> */}
        <Table dark striped hover>
          
        </Table>
      </Container>
    </div>
  );
}

export default Search;
