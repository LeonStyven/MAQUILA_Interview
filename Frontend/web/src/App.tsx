import { useState, useEffect } from "react";
import './App.css'
import DesktopHomePage from './components/Desktop/pages/homePage'
import MobileHomePage from './components/Desktop/pages/homePage'

function App() {
  const[isMobile, setIsMobile] = useState(false);

  useEffect(()=> {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    //Validar tamaño inicial de la pantalla
    checkScreenSize();


    //Escuchar cambios de tamaño
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize)
    };
  }, []);

  return (
    <>
      {isMobile && <DesktopHomePage/>}
      {!isMobile && <MobileHomePage/>}
    </>
  )
}

export default App
