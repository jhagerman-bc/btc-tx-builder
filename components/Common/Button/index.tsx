import { StyledButton } from "./index.styled"
import { ButtonProps, ButtonSize, ButtonType } from "./index.types"

export default function Button({
  size = ButtonSize.NORMAL,
  buttonType = ButtonType.PRIMARY,
  type = "button",
  children,
  ...all
}: ButtonProps) {
  return (
    <StyledButton size={size} buttonType={buttonType} {...all} type={type}>
      {children}
    </StyledButton>
  )
}
