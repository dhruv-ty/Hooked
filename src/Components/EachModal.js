import * as React from 'react';
import { useEffect, useState} from 'react'
import axios from 'axios'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import YoutubeIcon from '@mui/icons-material/YouTube';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { img_300 } from '../config'
import Carousel from '../Components/Carousel';
import '../Components/EachModal.css'
import StarIcon from '@mui/icons-material/Star';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { Hidden } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  height: 500,
  bgcolor: '#282c34',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowY: 'scroll'
};

const EachModal = ({children,id,media,rating}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [image, setimage] = useState([]);
  const [gallery, setgallery] = useState([]);
  const [Cast, setCast] = useState([]);
  const [Video, setVideo] = useState([])

  const getsomething = async()=>{
       const { data }=await axios.get(`https://api.themoviedb.org/3/${media}/${id}?api_key=8292e4d48eb3c112cbee716712541503&language=en-US`
       );
       setimage(data);
     };

  const getgallery = async()=>{
      const { data }=await axios.get(`http://universities.hipolabs.com/search?country=India`
      );
      //console.log(data)
      setgallery(data);
    };


  const getsomethingV = async()=>{
      const { data }=await axios.get(`https://api.themoviedb.org/3/${media}/${id}/videos?api_key=8292e4d48eb3c112cbee716712541503&language=en-US`
      );
      //console.log(data.results);
      data.results && data.results.some((v)=>
      (v.type=="Trailer" || v.type=="Teaser") && 
      setVideo(v.key)
      )

    };   
    
    useEffect(() => {
        getsomething();
        getgallery();
        getsomethingV();
    }, [])



  return (
    <div>
     <div onClick={handleOpen}className='comp' >
       {children}
     </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      > 
        <Box sx={style} className='box'>
        <div className='items'>
        <img id="wall" src={`${img_300}/${image.poster_path}`} className='poster'></img>
          <div className='details'> 
          <span className='det1'>{media==='movie'?image.title:image.original_name}</span>
          <span className='det1'>{rating}<span id='stars'><StarIcon/></span></span>
          <span className='det2'>{media==='movie'?"":((image.origin_country))}</span>
          <span className='det2'>{media==='movie'?((image.release_date)):((image.first_air_date))}</span>
          <span className='det2'>{media==='movie'?(<span>{image.runtime} Min</span>):(<span>{image.number_of_seasons==1?<span>1 Season</span>:<span>{image.number_of_seasons} Seasons</span>}</span>)} 
          </span>
          <span className='det2'>{image.overview}</span>
         <div className='btn'>
         {
         Video!="" ?
         <Button variant="outlined" startIcon={<YoutubeIcon/>} 
         href={`https://www.youtube.com/watch?v=${Video}`}
         size='large'
         color='error'
         style={{opacity: 5.5}}
         > 
         Watch Trailer Now 
         </Button>
        :
        <Button variant="outlined" startIcon={<YoutubeIcon/>} 
        href={`https://www.youtube.com/watch?v=${Video}`}
        size='large'
        color='error'
        style={{opacity: 5.5}}
        disabled={true}
        > 
        Watch Trailer Now 
        </Button> 
        
        }
         <Button variant="outlined" startIcon={<LightbulbIcon/>} 
         size='large' style={{marginLeft: 20}}
         href={`https://www.google.com/search?q=${media==='movie'? image.title:image.original_name} ${media}`}
         > 
         Learn More
         </Button>
         </div>
        
          </div>
          </div>
          <div style={{marginLeft: 15, fontSize: 30}}>
            Cast :
          </div>
          <Carousel media={media} id={id}/>
        </Box>
      </Modal>
    </div>
  );
}

export default  EachModal