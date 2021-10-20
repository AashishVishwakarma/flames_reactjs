import React from "react";
import styled from "styled-components";

const PageTitle = styled.div`
  text-align: center;
  & > h2 {
    font-size: 1.6em;
  }
`;

const Title = (props) => {
  return (
    <PageTitle>
      <h2>
        F.L.A.M.E.S <span role="img">🔥</span>
      </h2>
      <p>Play the F.L.A.M.E.S </p>
    </PageTitle>
  );
};

export default Title;
