import React from 'react'
import { useNavigate } from 'react-router'

const Navigation = () => {

    const navigation = useNavigate();
    return (
        <div>
            <button onClick={() => {
                navigation("/");
            }}>Home</button>
            <button onClick={() => {
                navigation("/dashboard");
            }}>Deshboard</button>
        </div>
    )
}

export default Navigation
