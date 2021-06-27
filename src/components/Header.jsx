import React from 'react'
import Btn from './Btn'

const Header = ({ onAdd, showAdd }) => {
    console.log(showAdd)
    return (
        <header>
            <h1>Task Tracker</h1>
            <Btn color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}></Btn>

        </header>
    )
}

export default Header
