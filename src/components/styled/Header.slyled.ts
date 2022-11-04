import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;

  h1 {
    color: grey;
    background-color: black;
  }
  & :hover {
    color: green;
  }
   > span {
    margin-right: auto;
  }
`;
