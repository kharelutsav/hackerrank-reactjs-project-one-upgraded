import React from 'react'

function Header(props) {
    return (
        <div>
            <button className='reset-button' onClick={props.reset} disabled={props.count === 0}>Reset</button>
            <button className='previous-button' onClick={props.decrease} disabled={props.count === 0}>Previous</button>
            <button className='next-button' onClick={props.increase} disabled={props.count === props.maxCount}>Next</button>
        </div>
    )
}

export default Header
