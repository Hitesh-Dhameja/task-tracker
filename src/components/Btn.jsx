import React from 'react'

const Btn = ({ color, text, onClick }) => {

    return (
        <div
            className="btn"
            onClick={onClick}
            style={{ backgroundColor: color }}
        >
            {text}
        </div>

    )
}

export default Btn
