import {useState } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'
import MyContext from './Context';

function App() {
  const [theme, setTheme] = useState("dark")
    const switchThemeHandler = () =>{
      if(theme === "dark"){  
        setTheme("light")
      }else{
        setTheme("dark")
      }
    }
  return (
    <MyContext.Provider value={{ theme, switchThemeHandler }}>
      <div className={`App ${theme}`}>
        <Header />
        <Outlet/>
      </div>
    </MyContext.Provider>
  );
}

export default App;
