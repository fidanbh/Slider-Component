import React from 'react'
import { useState, useContext } from "react";
import {UserContext} from '../Main/Main'
import Button from '../Button/Button';
import './buttons.css'


const Buttons = () => {
    const user = useContext(UserContext);
    const {prevCount, nextCount} = user;
    
  return (
    <div className='buttons'>
        <Button clickBtn={prevCount} name='Prev'/>
        <Button clickBtn={nextCount} name='Next'/>
    </div>
  )
}

export default Buttons