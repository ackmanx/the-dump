import React, { useState } from 'react'
import Head from 'next/head'

import { Login } from '../components/Login/Login'

const Root = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userData, setUserData] = useState({})

    return (
        <div id='root'>
            <Head>
                <title>the dump</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            {!isLoggedIn && <Login setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} />}
            {isLoggedIn && JSON.stringify(userData)}
        </div>
    )
}
export default Root
