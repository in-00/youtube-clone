import React from 'react'

const Button = ({label}) => {
  return (
    <button className='m-2 py-1 px-3 bg-gray-300 rounded-lg'>
        {label}
    </button>
  )
}

export default Button