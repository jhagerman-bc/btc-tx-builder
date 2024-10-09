import styled, { css } from "styled-components"
import { ButtonSize, ButtonType } from "./index.types"

export const StyledButton = styled.button<{ size: ButtonSize; buttonType: ButtonType }>`
  border-radius: 99rem;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  color: ${props => (props.color ? props.color : props.theme.colors.textPrimary)};
  border: none;
  box-sizing: border-box;

  ${props => {
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
  ${props => {
    switch (props.buttonType) {
      case ButtonType.ERROR: {
        return css`
          background-color: ${props.theme.colors.warning};
          color: ${props.theme.colors.primaryBG};
        `
      }
      case ButtonType.PRIMARY: {
        return css`
          background-color: ${props.theme.colors.textPrimary};
          color: ${props.theme.colors.primaryBG};
        `
      }
      case ButtonType.SECONDARY: {
        return css`
          border: 1px solid ${props.theme.colors.textPrimary};
          /* color: ${props.theme.colors.primaryBG}; */
        `
      }
      case ButtonType.SUCCESS: {
        return css`
          background-color: ${props.theme.colors.success};
          color: ${props.theme.colors.primaryBG};
        `
      }
    }
  }};
`

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  gap: 1rem;
`
