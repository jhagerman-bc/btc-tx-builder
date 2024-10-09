import styled from "styled-components"
import { AlignItem, FlexDirection, Justify } from "../index.types"
import { PropsWithChildren } from "react"

export const Section = styled.section<
  PropsWithChildren<{
    align?: AlignItem
    justify?: Justify
    flexDirection?: FlexDirection
    gap?: number
  }>
>`
  display: flex;
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : FlexDirection.column)};
  padding: 1rem;
  border-radius: 1rem;
  gap: ${props => (props.gap ? props.gap : 1)}rem;
  background-color: ${props => props.theme.colors.primaryBG};
  ${props => props.align && `align-items: ${props.align}`};
  ${props => props.justify && `justify-items: ${props.justify}`};
  opacity: 1;
`
