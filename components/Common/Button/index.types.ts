import { CSSProperties, ReactNode } from "react"

export enum ButtonSize {
  SMALL,
  NORMAL,
  LARGE,
}

export enum ButtonType {
  PRIMARY,
  SECONDARY,
  SUCCESS,
  ERROR,
}

export interface ButtonProps {
  children: ReactNode
  buttonType?: ButtonType
  size?: ButtonSize
  type?: "button" | "submit" | "reset"
  style?: CSSProperties
  onClick?: () => void
  disabled?: boolean
}
