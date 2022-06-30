import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm.js";

const Results = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/search/repositories?q=" + props.match.params.query)
      .then(results => results.json())
      .then(data => setData(data));
  }, [props]);

  function SearchResults(props) {
    if (props.totalCount !== undefined) {
      return <h2>Search found {data.total_count} results</h2>;
    }
    return null;
  }

  return (
    <div>
      <SearchForm />
      <SearchResults totalCount={data.total_count} />
    </div>
  )
}

export default Results;