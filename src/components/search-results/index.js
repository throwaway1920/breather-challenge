import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { SearchResult } from "../search-result";

const StyledSearchResults = styled.div`
  background-color: white;
  position: absolute;
  top: 54%;
  z-index: 99;
  border: 1px solid #eee;
  border-top: none;
  width: 50%;
  padding: 20px;
  box-shadow: 0px 7px 10px -4px rgba(0, 0, 0, 0.27);
  max-height: 300px;
  overflow-y: auto;

  display: ${props => (props.resultLength === 0 ? "none" : "block")};
`;

const SearchResultsComponent = ({ results }) => (
  <StyledSearchResults resultLength={results.length}>
    {results.map((result, index) => (
      <SearchResult key={index} result={result} />
    ))}
  </StyledSearchResults>
);

const mapStateToProps = state => {
  return {
    results: state.search.results
  };
};

export const SearchResults = connect(
  mapStateToProps,
  null
)(SearchResultsComponent);
