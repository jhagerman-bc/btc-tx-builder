import styled from "styled-components"

export const ContentWrapper = styled.div`
  height: 100%;
  width: max-content;
  display: grid;
  grid-template-columns: 1fr auto;
  width: calc(100% - 1rem);
  max-width: 1200px;
  justify-self: center;
  gap: 1.5rem;
  margin: 0rem 0.5rem;
`

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 1.5rem;
  grid-template-areas:
    "header"
    "content"
    "footer";
`
