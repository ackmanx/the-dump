import React from 'react'
import styled from 'styled-components'

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

export const Login = () => {
    return (
        <LoginOverlay$>
            <FlexPositioner$>
                <Login$ placeholder='why?' />
            </FlexPositioner$>
        </LoginOverlay$>
    )
}
