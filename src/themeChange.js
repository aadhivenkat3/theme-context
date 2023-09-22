import React from 'react'
import { useContext } from 'react';
import { AppContext } from './App';
import './App.css'

const ThemeChange = () => {

    const {setTheme} = useContext(AppContext);
    const {theme} = useContext(AppContext);

    const toggleTheme = () => {
        setTheme((beforeTheme)=>((beforeTheme) === true ? false : true)
    )}
   

  return (
    <div>
        <button onClick = {toggleTheme}>{theme === true ? 
        'light' : 'dark'}</button>
    </div>
  )
}

export default ThemeChange;