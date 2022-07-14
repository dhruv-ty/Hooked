import {React,useState} from 'react'
import { img_300 } from '../config'
import '../Components/EachComp.css'
import StarIcon from '@mui/icons-material/Star';
import Modal from '@material-ui/core/Modal';
import EachModal from './EachModal';


const EachComp_Movie = ({mid,title,path,date,rating}) => {
  
  return (
    <EachModal media={"movie"} id={mid} rating={rating}>
        <img className='detail' id='ig' src={`${img_300}/${path}`}></img>
        <span className='detail' id='name'>{title}</span>
        <span className='detail'>{rating}<span id='stars'><StarIcon/></span></span>
        
    </EachModal>
  )
}

export default EachComp_Movie