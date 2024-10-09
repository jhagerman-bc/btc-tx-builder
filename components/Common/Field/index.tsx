import { Caption } from "../Text/index.styled"
import { FlexColumn } from "../index.styled"
import { Container, Input, Label } from "./index.styled"
import { FieldProps } from "./index.types"
import { useTheme } from "styled-components"
export default function Field({ label, id, caption, error, errorMessage, ...all }: FieldProps) {
  const theme = useTheme()
  return (
    <Container>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Input id={id} {...all} error={error} aria-invalid={!!error} />
      <FlexColumn gap={0.25}>
        {caption && <Caption>{caption}</Caption>}
        {error && <Caption color={theme.colors.warning}>{errorMessage}</Caption>}
      </FlexColumn>
    </Container>
  )
}
