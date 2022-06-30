import React, {useState} from 'react';
import { withRouter } from 'react-router';

const SearchForm = (props) => {
  const [query, setQuery] = useState([]);

  const handleInput = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.history.push(`/search/${query}`);
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
          <input type="text" className="form-control" placeholder="Search" onChange={handleInput}/>
          <button type="submit" className="btn btn-default">Submit</button>
      </form>
    </div>
  );
}

export default withRouter(SearchForm);
