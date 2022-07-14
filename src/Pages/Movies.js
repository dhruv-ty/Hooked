import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useEffect, useState} from 'react'
import EachComp_Movie from '../Components/EachComp_Movie';
import '../Pages//Movies.css'
import CustomPagination from '../Components/CustomPagination';
import axios from 'axios'

const Movies = () => {
  const [value, setValue] = useState('popular');
  const [Page, setPage] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [Content, setContent] = useState([]);
  const getsomething = async()=>{
       
       const { data }=await axios.get(`https://api.themoviedb.org/3/movie/${value}?api_key=8292e4d48eb3c112cbee716712541503&language=en-US&page=${Page}`
       );
       setContent(data.results);
      
    };


   
  useEffect(() => {
    getsomething();
}, [value,Page])


  return (
    <div>
         <Tabs className='mtab'
        value={value}
        onChange={handleChange}
        textColor="inherit"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#D97D54"
           }
          }}
        aria-label="secondary tabs example"
        variant='fullWidth'
      >
        <Tab value="popular" label="Popular" />
        <Tab value="top_rated" label="Top Rated" />
        <Tab value="upcoming" label="Upcoming" />
      </Tabs>

      <div style={{marginTop: 40}}><CustomPagination  setPage={setPage}/></div>
     
     <div className='trend' style={{marginTop: 0}}>
      {
      Content && Content.map((c)=> 
      c.poster_path &&        
      <EachComp_Movie key={c.id} mid={c.id} title={c.original_title} path={c.poster_path} date={c.release_date} rating={c.vote_average}/>

      )
      }   
    </div>



    </div>
  )
}

export default Movies