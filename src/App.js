import logo from './logo.svg';
import './App.css';
import  SimpleBottomNavigation from './Components/NavBar';
import Header from './Components/Header';
import { Container} from '@mui/material';
import Trending from './Pages/Trending';
import Movies from './Pages/Movies';
import Shows from './Pages/Shows';
import Search from './Pages/Search';
import NavBar from './Components/NavBar'
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  
  return (
    <BrowserRouter>
     <div className="App">  
     <Header/>
     <Container style={{color:"white",marginTop:"100px"}} >
      <Routes>
           <Route path='/' element={<Trending/>} />
           <Route path='/movies' element={<Movies/>}/>
           <Route path='/shows' element={<Shows/>}/>
           <Route path='/search' element={<Search/>}/>
      </Routes>

     </Container>
     <NavBar/>
     
    </div>
    </BrowserRouter>
   
  );
}

export default App;
