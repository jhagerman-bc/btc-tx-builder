import { lightTheme } from "@/theme/light"
import type { AppProps } from "next/app"
import { Inter } from "@next/font/google"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import Layout from "@/components/Layout"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${inter.style.fontFamily}, sans-serif;
    margin: 0px;
    max-width: 100vw;
    overflow-x: hidden;
    background: rgb(58,163,218);
    background: linear-gradient(90deg, rgba(58,163,218,1) 0%, rgba(108,17,218,1) 100%);
  }
`

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme as any}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
