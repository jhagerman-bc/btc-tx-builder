import styled from "styled-components"
import { AlignItem, Justify } from "./index.types"

export const FlexRow = styled.div<{ gap?: number; align?: AlignItem; justify?: Justify }>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${props => (props.gap ? props.gap : 1)}rem;
  ${props => props.align && `align-items: ${props.align}`};
  ${props => props.justify && `justify-items: ${props.justify}`};
`

export const FlexColumn = styled.div<{ gap?: number; align?: AlignItem; justify?: Justify }>`
  display: flex;
  flex-direction: column;
  gap: ${props => (props.gap ? props.gap : 1)}rem;
  ${props => props.align && `align-items: ${props.align}`};
  ${props => props.justify && `justify-items: ${props.justify}`};
`

export const Spacer = styled.div`
  display: flex;
  flex: 1;
`
