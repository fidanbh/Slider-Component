import React from 'react'





const Button = ({name, clickBtn}) => {
// const {name} = props

  return (
    <div>
        
        <button onClick={clickBtn}>{name}</button>
    </div>
  )
}

export default Button