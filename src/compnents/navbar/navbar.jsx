import React from 'react';
import './navbar.css';
import { useContext } from 'react';
import { Context } from '../../context/context';
export const Navbar = () => {
  const {
    navpr,
		setNavpr,
		navco,
		setNavco,
		navimg,
		setNavimg
  } = useContext(Context);
  const setCode=()=>{
    setNavimg(false);
    setNavpr(false);
    setNavco(true);
  }
  const setPrompt=()=>{
    setNavimg(false);
    setNavpr(true);
    setNavco(false);
  }
  const setImg=()=>{
    setNavimg(true);
    setNavpr(false);
    setNavco(false);
  }
  return (
    <div>
      <div className='navbar-container'>
        <h2>PAAM</h2>
        <a className='navlink' href='#Prompt_gen' onClick={setPrompt}>Promp-Gen</a>
        <a className='navlink' href='#Image-done' onClick={setImg}>AI-image</a>
        <a className='navlink' href='#Code_gen' onClick={setCode}>Code-gen</a>
      </div>
      
    </div>
  );
};
