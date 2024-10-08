import { FlexColumn, FlexRow } from "../Common/index.styled"
import Content from "./Content"
import Footer from "./Footer"
import Masthead from "./Masthead"
import Nav from "./Navigation"
import { Container, ContentWrapper } from "./index.styled"
import { LayoutProps } from "./index.types"

export default function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Masthead />
      <ContentWrapper>
        <Content>{children}</Content>
        <Nav />
      </ContentWrapper>
      <Footer />
    </Container>
  )
}
