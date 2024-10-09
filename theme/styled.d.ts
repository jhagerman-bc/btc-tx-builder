// styled.d.ts
import "styled-components"

// Extend the DefaultTheme interface with your custom theme properties
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      [key: string]: string
    }
  }
}
