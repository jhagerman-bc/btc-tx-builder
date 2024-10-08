import styled from "styled-components"
import { AlignItem, FlexDirection, Justify } from "../index.types"

export const Container = styled.section<{
  align?: AlignItem
  justify?: Justify
  flexDirection: FlexDirection
  gap?: number
}>`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  padding: 1rem;
  border-radius: 1rem;
  gap: ${props => (props.gap ? props.gap : 1)}rem;
  background-color: ${props => props.theme.colors.primaryBG};
  ${props => props.align && `align-items: ${props.align}`};
  ${props => props.justify && `justify-items: ${props.justify}`};
  opacity: 1;
`
