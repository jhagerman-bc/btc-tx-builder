import Button from "@/components/Common/Button"
import { ButtonSize } from "@/components/Common/Button/index.types"
import { Section } from "@/components/Common/Section"
import { FlexColumn, FlexRow } from "@/components/Common/index.styled"

export default function Home() {
  return (
    <>
      <Section>
        <FlexColumn>
          <FlexColumn>
            <Button>OK</Button>
            <Button disabled>NO</Button>
          </FlexColumn>
          <Button size={ButtonSize.SMALL}>Small Button</Button>
          <Button>OK</Button>
          <Button disabled size={ButtonSize.LARGE}>
            Large Button
          </Button>
          <FlexRow>
            <Button size={ButtonSize.SMALL}>Small Button</Button>
            <Button disabled size={ButtonSize.LARGE}>
              Large Button
            </Button>
          </FlexRow>
        </FlexColumn>
      </Section>
    </>
  )
}
