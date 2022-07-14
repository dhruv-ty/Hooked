import {React,useState} from 'react'
import { img_300 } from '../config'
import '../Components/EachComp.css'
import StarIcon from '@mui/icons-material/Star';
import Modal from '@material-ui/core/Modal';
import EachModal from './EachModal';

import { Dialog,DialogContent,DialogTitle,DialogContentText } from '@mui/material'

const EachComp = ({mid,title,path,media,oname,date,rating}) => {
  return (
    <EachModal media={media} id={mid} rating={rating} >
        <img className='detail' id='ig' src={`${img_300}/${path}`}></img>
        <span className='detail' id='name'>{media==='movie'?title:oname}</span>
        <span className='detail'>{media==='movie'?"Movie":"TV Show"}</span>
        <span className='detail'>{rating}<span id='stars'><StarIcon/></span></span>
        
    </EachModal>
  )
}

export default EachComp