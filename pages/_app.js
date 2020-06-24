/*
 * The reason this file is strangely named _app.js
 *
 * Next.js uses the App component to initialize pages. You can override it and control the page initialization
 * To override the default App, create the file ./pages/_app.js
 *
 * https://nextjs.org/docs/advanced-features/custom-app
 */

import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
}
`

export default function MyApp({ Component: Page, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Page {...pageProps} />
        </>
    )
}
