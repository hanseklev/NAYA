import React from "react"
import styled from "styled-components"

/* const Overlay = styled.div`
  display:  ${props => (props.isOpen ? "block" : "none")};
  ${'' /* position: block; 
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto;  
  background-color: rgb(0, 0, 0); 
  background-color: rgba(0, 0, 0, 0.4); 
    display: ${props => (props.isOpen ? "flex" : 'none')};

` */


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  text-align: left;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  background-color: var(--bg-secondary);
  transition: transform 0.6s;

  transform: translate(
    ${props => (props.isOpen ? "0" : props.slideLeft ? "-100%" : "100%")}
  );

  @media (min-width: 769px) {
    width: 45%;
    top: 0;
    ${props => props.slideLeft ? 'left: 0;' : 'right: 0;'};

    transform: translate(
      ${props => (props.isOpen ? "125%" : props.slideLeft ? "-200%" : "250%")}
    );
  }
`

const ModalContainer = ({ children, isOpen, slideLeft }) => {
  return (
    <Container isOpen={isOpen} slideLeft={slideLeft}>
      {children}
    </Container>
  )
}

export default ModalContainer
