import React from 'react'
import Head from 'next/head'

import { Login } from '../components/Login/Login'

const Root = () => (
    <div id='root'>
        <Head>
            <title>the dump</title>
            <link rel='icon' href='/favicon.ico' />
        </Head>

        <Login />
    </div>
)

export default Root
