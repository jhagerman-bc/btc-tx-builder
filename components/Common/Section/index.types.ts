import { ReactNode } from "react"
import { FlexDirection } from "../index.types"

export interface SectionProps {
  children: ReactNode
  flexDirection?: FlexDirection
  gap?: number
}
