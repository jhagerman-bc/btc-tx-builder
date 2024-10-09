import styled from "styled-components"

type BaseProps = {
  color?: string
}
export const Paragraph = styled.p<BaseProps>`
  margin: 0px;
  padding: 0px;
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.color ? props.color : props.theme.colors.textPrimary)};
`

export const Title = styled.h1<BaseProps>`
  margin: 0px;
  padding: 0px;
  font-size: 20px;
  font-weight: 600;
  color: ${props => (props.color ? props.color : props.theme.colors.textPrimary)};
`

export const Title2 = styled.h2<BaseProps>`
  margin: 0px;
  padding: 0px;
  font-size: 18px;
  font-weight: 600;
  color: ${props => (props.color ? props.color : props.theme.colors.textPrimary)};
`

export const Header = styled.p<BaseProps>`
  margin: 0px;
  padding: 0px;
  font-size: 16px;
  font-weight: 600;
  color: ${props => (props.color ? props.color : props.theme.colors.textPrimary)};
`

export const Caption = styled.caption<BaseProps>`
  margin: 0px;
  padding: 0px;
  font-size: 12px;
  font-weight: 500;
  display: block;
  text-align: start;
  color: ${props => (props.color ? props.color : props.theme.colors.textPrimary)};
`
