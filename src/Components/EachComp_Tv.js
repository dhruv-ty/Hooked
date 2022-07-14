import {React,useState} from 'react'
import { img_300 } from '../config'
import '../Components/EachComp.css'
import StarIcon from '@mui/icons-material/Star';
import Modal from '@material-ui/core/Modal';
import EachModal from './EachModal';


const EachComp_Tv = ({mid,oname,path,date,rating}) => {
  
  return (
    <EachModal media={"tv"} id={mid} rating={rating}>
        <img className='detail' id='ig' src={`${img_300}/${path}`}></img>
        <span className='detail' id='name'>{oname}</span>
        <span className='detail'>{rating}<span id='stars'><StarIcon/></span></span>
        
    </EachModal>
  )
}

export default EachComp_Tv