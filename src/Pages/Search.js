import * as React from 'react';
import TextField from '@mui/material/TextField';
import '../Pages/search.css'
import CustomPagination from '../Components/CustomPagination';
import { Button, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect, useContext} from "react";
import axios from 'axios'
import EachComp from '../Components/EachComp';
import mascot from '../pngwing.com.png'
import { Cont } from '../Context';

const useStyles = makeStyles({
  input: {
    color: "white"
  }
});

const Search = () => {
  const classes = useStyles();
  const [Text, setText] = useState("");
  const [Content, setContent] = useState();
  const [Page, setPage] = useState(1);
  const [Result, setResult] = useState(0);
  const {Count,setCount} = useContext(Cont);
  
  const getsomething = async()=>{
     

    const { data }=await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=8292e4d48eb3c112cbee716712541503&language=en-US&query=${Text}&page=${Page}&include_adult=false`
    );

    setContent(data.results);
    (Result)? setResult(0):
    (data.results.length==0) ? setResult(1): console.log("#fgf4534");
 };

 useEffect(() => {
  
  Text && 
  getsomething();

}, [Page])



  const theme = createTheme({
    palette: {
      type:"dark",
      primary: {
        main: '#fff',
        contrastText: '#fff'
       },
     },
  })
  
  
  return (

<div>

  <ThemeProvider theme={theme}>
 
  <TextField  inputProps={{ className: classes.input }}
  className='searchBox' label="Search for anything" InputLabelProps={{className: 'textlabel'}} variant="outlined" 
  onChange={(e)=> setText(e.target.value)}
  />

  <Button variant="outlined" style={{marginTop: 0, height: 55}}
  onClick={getsomething}
  >
  <SearchIcon/>
  </Button>      
  
  </ThemeProvider>

 

<div className='trend' style={{marginTop: 50}}>
  
<CustomPagination setPage={setPage} inputProps={{ className: classes.input }} />
   {
           Content && Content.map((c)=>
           c.poster_path &&
           <EachComp key={c.id} mid={c.id} title={c.original_title} path={c.poster_path} media={c.media_type} oname={c.original_name} date={c.release_date} rating={c.vote_average}/>
           )
     
   } 

{  
   Content==null  ?
   <img className='fun' src={mascot} style={{width: 200, height: 200, opacity: 0.8}}></img>
   : console.log("#h2g132yhace")
}  
   {
     (Result) ? <span> No results Found</span> : ""
   }  

</div>

</div>

  )
}

export default Search