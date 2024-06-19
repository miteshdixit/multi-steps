import { useState } from "react";
import { IoIosMoon } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";

function Header() {
 
    const [darkMode, setDarkMode] = useState(false);
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      document.documentElement.setAttribute('data-bs-theme', darkMode ? 'light' : 'dark');
    }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark-subtle" style={{height:"5rem"}}>
    <div className="container">
      <a className="navbar-brand" href="#">Multi-Step Form <span className="badge text-bg-secondary">-by Mitesh Dixit</span></a>
      {
        
        <div  onClick={toggleDarkMode} style={{fontSize: '2em'}}>
          { darkMode === true ?
          <IoSunnyOutline/>
          :
          <IoIosMoon />
        }
        </div>
      }
    </div>
  </nav>
  )
}


export default Header