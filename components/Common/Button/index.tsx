import { StyledButton } from "./index.styled"
import { ButtonProps, ButtonSize, ButtonType } from "./index.types"

export default function Button({
  size = ButtonSize.NORMAL,
  buttonType = ButtonType.PRIMARY,
  type = "button",
  style,
  onClick,
  children,
  disabled,
}: ButtonProps) {
  const props = { size, buttonType, type, style, onClick, disabled }
  return <StyledButton {...props}>{children}</StyledButton>
}
