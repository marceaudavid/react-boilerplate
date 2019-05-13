import React, { Component } from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  color: blue;
`;

class Hello extends Component {
  render() {
    return (
      <>
        <StyledTitle>Hello World !</StyledTitle>
      </>
    );
  }
}

export default Hello;
