import '../styles.css'
import React from 'react'

//In order to import a global css file, you have to create this component to override the one Next.js implements
//For each page you go to, the component for the page is passed here as Component
//This is the only place you can import global css, and the file cannot reside in the /public folder

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}
