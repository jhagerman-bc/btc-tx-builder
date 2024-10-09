import { StyledIcon } from "./index.styled"
import { IconProps } from "./index.types"

export default function Icon({ type, ...props }: IconProps) {
  console.log({ type, x: "x" })
  return <StyledIcon src={type} {...props}></StyledIcon>
}
// }https://react-icons.github.io/react-icons/icons/bs/
