import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import searchBackground from "../../assets/search_background.png";
import { SearchResults } from "../search-results";
import { SEARCH_REQUEST } from "../../actions/types";

const StyledSearch = styled.div`
  background-image: url(${searchBackground});
  display: flex;
  height: 400px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledInput = styled.input`
  height: 40px;
  width: 50%;
  border-radius: 4px;
  outline: none;
  border: 1px solid #eee;
  padding: 0 20px;
`;

const SearchComponent = ({ onFilterChanged }) => {
  return (
    <StyledSearch>
      <StyledInput
        type="text"
        onChange={onFilterChanged}
        placeholder="Enter keyword"
      />
      <SearchResults />
    </StyledSearch>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onFilterChanged: event =>
      dispatch({
        type: SEARCH_REQUEST,
        payload: { filter: event.target.value }
      })
  };
};

export const Search = connect(
  null,
  mapDispatchToProps
)(SearchComponent);
