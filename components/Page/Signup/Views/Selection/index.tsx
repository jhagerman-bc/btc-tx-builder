import Button from "@/components/Common/Button"
import { ButtonSize } from "@/components/Common/Button/index.types"
import { Title } from "@/components/Common/Text/index.styled"
import { FlexColumn } from "@/components/Common/index.styled"
import { Spacer } from "@/components/Common/index.styled"

export default function SignupSelection() {
  return (
    <>
      <Title>Create an Account</Title>
      <Spacer />
      <FlexColumn>
        <Button size={ButtonSize.LARGE}>Create New Wallet</Button>
        <Button size={ButtonSize.LARGE}>Import Private Key</Button>
      </FlexColumn>
    </>
  )
}
