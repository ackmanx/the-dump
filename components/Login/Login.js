import React, { useCallback } from 'react'
import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'

const LoginOverlay$ = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 90px;
    color: black;
`

const FlexPositioner$ = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const Login$ = styled.input`
    border: none;
    outline: none;
    padding: 0;
    text-align: center;
    font-size: 72px;
`

export const Login = props => {
    const { setIsLoggedIn, setUserData } = props

    const handleSubmit = useCallback(async event => {
        event.preventDefault()

        const {
            pin: { value: pin },
            password: { value: password },
        } = event.target

        if (password) return

        const userData = await fetch(`/api/dumps/${pin}`)

        setUserData(await userData.json())
        setIsLoggedIn(true)
    }, [])

    return (
        <LoginOverlay$>
            <FlexPositioner$>
                <form onSubmit={handleSubmit}>
                    <Login$ name='pin' placeholder='why?' />
                    <input name='password' id='password' type='hidden' />
                </form>
            </FlexPositioner$>
        </LoginOverlay$>
    )
}
