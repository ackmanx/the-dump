import React from 'react'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'

const Root = ({ dumpsFromDB }) => (
    <div id="root">
        <Head>
            <title>the dump</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>{JSON.stringify(dumpsFromDB)}</main>
    </div>
)

Root.getInitialProps = async () => {
    const res = await fetch('http://me:3000/api/dumps')
    return { dumpsFromDB: await res.json() }
}

export default Root
