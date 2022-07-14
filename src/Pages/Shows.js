import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useEffect, useState} from 'react'
import EachComp_Tv from '../Components/EachComp_Tv';
import '../Pages//Movies.css'
import CustomPagination from '../Components/CustomPagination';
import axios from 'axios'

const Movies = () => {
  const [value, setValue] = useState('on_the_air');
  const [Page, setPage] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [Content, setContent] = useState([]);
  const getsomething = async()=>{
       
       const { data }=await axios.get(`https://api.themoviedb.org/3/tv/${value}?api_key=8292e4d48eb3c112cbee716712541503&language=en-US&page=${Page}`
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
        <Tab value="on_the_air" label="On Air" />
        <Tab value="popular" label="Popular" />
        <Tab value="top_rated" label="Top Rated" />
        
      </Tabs>

      <div style={{marginTop: 40}}><CustomPagination  setPage={setPage}/></div>
     
     <div className='trend' style={{marginTop: 0}}>
      {
      Content && Content.map((c)=> 
      c.poster_path &&        
      <EachComp_Tv key={c.id} mid={c.id} oname={c.original_name} path={c.poster_path} date={c.release_date} rating={c.vote_average}/>

      )
      }   
    </div>



    </div>
  )
}

export default Movies