import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`
export const Label = styled.label`
  font-weight: 600;
  font-size: 0.875rem;
  color: ${props => props.theme.colors.textPrimary};
`
export const Input = styled.input<{ error?: boolean }>`
  border-radius: 2rem;
  padding: 0.75rem 1rem;
  font-family: inherit;
  color: ${props => props.theme.colors.textPrimary};
  outline: none;
  border: 1px solid
    ${props => (props.error ? props.theme.colors.warning : props.theme.colors.textPrimary)};

  :focus-visible {
    border: 1;
  }
`
