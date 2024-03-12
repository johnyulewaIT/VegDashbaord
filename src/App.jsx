import React, { useState } from 'react';
import Sidebar from './Components/Sidebar/Sidebar'
import Main from './Components/Main/Main'
import Navbar from './Components/Navbar/Navbar'
const App = () => {
  const[theme, setTheme] =useState('light')
  return (
    <div className='flex bg-dark'>
      <Sidebar/>
      <div className='h-screen overflow-auto flex flex-col w-[85%]  bg-malachite-50 dark:bg-[#273746]'>
        <Navbar theme={theme} setTheme={setTheme}/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
