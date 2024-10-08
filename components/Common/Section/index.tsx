import { Container } from "./index.styled"
import { SectionProps } from "./index.types"
import { FlexDirection } from "../index.types"

export const Section = ({ children, ...all }: SectionProps) => {
  const props = {
    ...all,
    flexDirection: all?.flexDirection ? all?.flexDirection : FlexDirection.column,
  }
  return <Container {...props}>{children}</Container>
}
