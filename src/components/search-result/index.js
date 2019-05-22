import React from "react";
import styled from "styled-components";

const StyledSearchResult = styled.div`
  margin-bottom: 10px;
`;

const StyledSearchTitle = styled.a`
  color: #189ad3;
`;

const StyledSearchSubtext = styled.a`
  display: flex;
  font-size: 12px;
  color: #7c7c7c;
`;

export const SearchResult = ({ result: { url, title, points, author } }) => (
  <StyledSearchResult>
    <StyledSearchTitle href={url} target="_blank" rel="noopener noreferrer">
      {title}
    </StyledSearchTitle>
    <StyledSearchSubtext>
      {points} points by {author}
    </StyledSearchSubtext>
  </StyledSearchResult>
);
