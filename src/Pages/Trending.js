import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EachComp from '../Components/EachComp';
import '../Pages/Trending.css'
import CustomPagination from '../Components/CustomPagination';

const Trending = () => {
  
  const [Page, setPage] = useState(1);
  const [content, setcontent] = useState([]);
  const getsomething = async()=>{
       const { data }=await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=8292e4d48eb3c112cbee716712541503&page=${Page}`
       );
       setcontent(data.results);
       console.log(data);
    };
    
    useEffect(() => {
        getsomething();
    }, [Page])
    


  return (

    <div >
        <div className='trend' >
        <CustomPagination  setPage={setPage}/>
           {
           content && content.map((c)=> 
           <EachComp key={c.id} mid={c.id} title={c.original_title} path={c.poster_path} media={c.media_type} oname={c.original_name} date={c.release_date} rating={c.vote_average}/>
           )
           }
        </div>
      
    </div>
  )
}

export default Trending