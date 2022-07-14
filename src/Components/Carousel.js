import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useEffect, useState} from 'react'
import axios from 'axios'
import { img_300, noPicture } from '../config'
import '../Components/caroitem.css'



const Carousel = ({media,id}) => {
    const [Cast, setCast] = useState([]);

    const handleDragStart = (e) => e.preventDefault();

const items = Cast?.map((c)=> (
    <div className='caroitem'>
    <img className='castwall' src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}></img>    
    <b>{c.name}</b>
    </div>
    
));
    
const responsive =
{
    0: {
        items: 1,
    },
    1024: {
        items: 5
    }
  } 
    
    const getCast = async()=>{
    const { data }=await axios.get(`https://api.themoviedb.org/3/${media}/${id}/credits?api_key=8292e4d48eb3c112cbee716712541503&language=en-US`
    );
    //console.log(data.cast)
    setCast(data.cast)
  };   






  useEffect(() => {
     getCast();
  }, [])
  



    return (
        <div>
         {
         Cast.length>0 ? 
        <AliceCarousel responsive={responsive}mouseTracking items={items} /> 
        :
        <span style={{margin: 350, marginTop: 20}}>Nothing to show</span>   
         }
        </div>
        
      )
}

export default Carousel