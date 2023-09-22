import React  from 'react'
import ThemeChange from './themeChange';
import { createContext, useState } from "react"
import './App.css'


export const AppContext = createContext ('light');


const App = () => {

  const [theme, setTheme] = useState(false);

  return (
      <div className = {theme ? 'light' : 'dark'}>

          <AppContext.Provider value = {{theme,setTheme}}>
            <ThemeChange/>
         </AppContext.Provider>

      </div>
        
    
  );
}

export default App;


