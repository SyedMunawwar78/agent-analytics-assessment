import React from 'react'
import "./input.css"

function Input({search , setSearch}) {
    return (
        <input
            type="text"
            placeholder="Search products..."
            value={search}
            className='pretty-input'
            onChange={e => setSearch(e.target.value)}
        />
    )
}

export default Input