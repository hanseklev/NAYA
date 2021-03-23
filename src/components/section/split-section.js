import React from "react"
import styled from "styled-components"

const SectionWrap = styled.section`
  display: flex;
  min-height: 400px;
`

const Column = styled.div`
  background-color: ${props => props.bgColor || "inherit"};
  flex: 1;
`

const SplitSection = () => {
  return (
    <SectionWrap>
      <Column bgColor="var(--bg-dark)">Hei</Column>
      <Column>Halo</Column>
    </SectionWrap>
  )
}

export default SplitSection
