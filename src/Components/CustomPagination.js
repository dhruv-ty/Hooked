import React from 'react'
import Pagination from '@mui/material/Pagination';
import '../Components/pageno.css'


const CustomPagination = ({setPage}) => {
    const handlechange= (page)=>{
              setPage(page);
              window.scroll(0, 0);
    }

  return (
    <div className='pages'>
        <Pagination size="large" color="secondary" count={50} onChange={(e)=>handlechange(e.target.textContent)}/>
      
    </div>
  )
}

export default CustomPagination