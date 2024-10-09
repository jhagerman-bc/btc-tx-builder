import Button from "@/components/Common/Button"
import { ButtonSize, ButtonType } from "@/components/Common/Button/index.types"
import Field from "@/components/Common/Field"
import { Section } from "@/components/Common/Section/index.styled"
import { Caption, Paragraph, Title, Title2 } from "@/components/Common/Text/index.styled"
import { FlexColumn, FlexRow } from "@/components/Common/index.styled"

export default function Home() {
  return (
    <>
      <Section>
        <FlexColumn>
          <FlexColumn>
            <Button buttonType={ButtonType.ERROR}>OK</Button>
            <Button disabled>NO</Button>
          </FlexColumn>
          <Button size={ButtonSize.SMALL} buttonType={ButtonType.SECONDARY}>
            Small Button
          </Button>
          <Button>OK</Button>
          <Button disabled size={ButtonSize.LARGE}>
            Large Button
          </Button>
          <FlexRow>
            <Button size={ButtonSize.SMALL} buttonType={ButtonType.SUCCESS}>
              Small Button
            </Button>
            <Button disabled size={ButtonSize.LARGE}>
              Large Button
            </Button>
          </FlexRow>
          <Paragraph>The cat and the dog ate the moon.</Paragraph>
          <Title>The cat and the dog ate the moon.</Title>
          <Title2>The cat and the dog ate the moon.</Title2>
          <Caption>The cat and the dog ate the moon.</Caption>
        </FlexColumn>
        <Field
          label="This is the label"
          id="test"
          caption="This is the caption"
          placeholder="this is the placeholder"
        />
      </Section>
    </>
  )
}
