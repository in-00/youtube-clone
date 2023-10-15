import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const buttonLabel = ['All', 'Games', "Movies", "Stocks", "Mixes", "News", "Sports", "Cricket"];
  return (
    <div>
      {buttonLabel.map((buttonname, index)=><Button key={index} label={buttonname}/>)}
    </div>
  )
}

export default ButtonList