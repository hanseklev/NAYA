import React from "react";
import styled from "styled-components";
import '../../styles/global.css'

type Props = {
  hideFooter?: boolean;
  children?: JSX.Element | JSX.Element[];
};

const MainLayout = ({ hideFooter, children }: Props) => {
  return (
    <React.Fragment>
      <Layout>{children}</Layout>
    </React.Fragment>
  );
};

const Layout = styled.main`
  position: relative;
  padding: 0;
  margin: 0 auto;
  background: #fbfaf7;
  width: 100%;
  text-align: center;
  min-height: 500px;

  @media (min-width: 769px) {
    max-width: 1980px;
  }
`;



export default MainLayout;

/*

 position: relative;
  min-height: 400px;

  */
