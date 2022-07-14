import React from 'react'
import "./Header.css";
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate=useNavigate(); 

  const mov =() => {
    window.scroll(0, 0);  
  }
  return (
    <span  className='header' ><span className='title' onClick={mov}><LiveTvIcon  className='logo'/><span style={{marginLeft: 20, paddingTop: 5}}>HOOKED</span></span>  </span>
    
  )
}

export default Header
