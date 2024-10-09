import { Container } from "./index.styled"
import { Paragraph } from "@/components/Common/Text/index.styled"
import { useTheme } from "styled-components"
export default function Footer() {
  const theme = useTheme()
  return (
    <Container>
      <Paragraph color={theme.colors.white} style={{ fontWeight: 400 }}>
        John Hagerman
      </Paragraph>
    </Container>
  )
}
