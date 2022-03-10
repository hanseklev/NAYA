import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { debounce } from "../../lib/helpers";
import Logo from "../logo";

const Header = () => {
  const [isHidden, setIsHidden] = React.useState(false);

  React.useEffect(() => {
    let mounted = true;
    if (mounted) debounce(setScrollDirection, 300);
    return () => {
      mounted = false;
    };
  }, []);

  function setScrollDirection() {
    if (typeof window !== "undefined") {
      let prevScrollPosition = window.scrollY;
      window.onscroll = () => {
        window.scrollY < prevScrollPosition
          ? setIsHidden(false)
          : setIsHidden(true);
        prevScrollPosition = window.scrollY;
      };
    }
  }

  return (
    <>
      <Container hideHeader={isHidden}>
        <Column>
          <Logo />
        </Column>
      </Container>
    </>
  );
};
//styles={{ border: "solid" }}
/*      <Column>
          <Navigation />
        </Column> 
        </Column>
        <Column></Column>*/

const Container = styled.header<{ hideHeader: boolean }>`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  position: sticky;
  position: -webkit-sticky;
  z-index: 99;
  background-color: #fbfaf8;

  top: ${(props) => (props.hideHeader ? "-60px" : "0")};
  transition: top 0.5s;
`;

const Column = styled.div<{ pr?: number }>`
  display: flex;
  flex: 3;
  justify-content: center;
  padding-right: ${(props) => props.pr || 0}

  &:first-child {
    justify-content: flex-start;
  }

  &:nth-child(2) {
    padding-left: ${(props) => props.pr || 0}rem;
    flex: 1;
    justify-content: center;
  }

  
`;

/* &:last-child {
    padding-right: 1rem;
    justify-content: flex-end;
  } */

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
