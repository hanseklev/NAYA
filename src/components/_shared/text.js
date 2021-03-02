import styled from "styled-components"

const Paragraph = styled.p`
  line-height: 1.6rem;
  letter-spacing: 0.04rem;
  margin-bottom: 2zrem;
  padding: 0 1rem;
  color: ${props => (props.dark ? "white" : "var(--color-text)")};
`
export default Paragraph
