import styled, { css } from "styled-components"
import { ButtonSize, ButtonType } from "./index.types"

export const StyledButton = styled.button<{ size: ButtonSize; buttonType: ButtonType }>`
  border-radius: 99rem;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};

  ${props => {
    console.log(props)
    switch (props.size) {
      case ButtonSize.NORMAL: {
        return css`
          padding: 0.5rem 1.25rem;
          font-size: 14px;
        `
      }
      case ButtonSize.SMALL: {
        return css`
          padding: 0.25rem 1rem;
          font-size: 12px;
        `
      }
      case ButtonSize.LARGE: {
        return css`
          padding: 0.75rem 1.5rem;
          font-size: 18px;
        `
      }
    }
  }}
`
