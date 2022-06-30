import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchForm from './SearchForm.js';
import Results from './Results.js';

const Search = () => (
  <Switch>
    <Route exact path='/' component={SearchForm}/>
    <Route path='/search/:query' component={Results}/>
  </Switch>
);

export default Search;
