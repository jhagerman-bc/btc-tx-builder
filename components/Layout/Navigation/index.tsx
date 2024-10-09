import { Section } from "@/components/Common/Section/index.styled"
import { Item, List, Navigation } from "./index.styled"

export default function Nav() {
  return (
    <Navigation>
      <Section>
        <List>
          <Item>Assets</Item>
          <Item>Activity</Item>
          <Item>Send</Item>
        </List>
      </Section>
    </Navigation>
  )
}
