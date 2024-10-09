import { Section } from "@/components/Common/Section/index.styled"
import { Title } from "@/components/Common/Text/index.styled"
import { Container } from "./index.styled"
import SignupSelection from "./Views/Selection"

export default function Signup() {
  return (
    <Container>
      <SignupSelection />
    </Container>
  )
}
