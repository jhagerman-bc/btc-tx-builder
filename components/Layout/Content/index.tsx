import { ReactNode } from "react"
import { Container } from "./index.styled"

export default function Content({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>
}
