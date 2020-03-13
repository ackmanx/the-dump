import React from 'react'

const styles = {
    loginOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        fontSize: '90px',
        color: 'black',
    },
    flexPositioner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    login: {
        border: 'none',
        outline: 'none',
        padding: 0,
        textAlign: 'center',
        fontSize: 72,
    },
}

export const Login = () => {
    return (
        <div style={styles.loginOverlay}>
            <div style={styles.flexPositioner}>
                <input placeholder='why?' style={styles.login} />
            </div>
        </div>
    )
}
