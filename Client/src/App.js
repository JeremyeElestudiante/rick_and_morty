import './App.css';
// import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import { useEffect } from 'react';
import Favorites from './components/favorites/Favorites'
// eslint-disable-next-line

const EMAIL = 'rick@hotmail.com'
const PASSWORD = '12345'

function App() {
   
   const [access, setAccess] = useState(false)
   
   const navigate = useNavigate()

   const login = (userData)=>{
      if(userData.email === EMAIL && userData.password === PASSWORD){
         setAccess(true)
         navigate('/home')
      }
   }

   useEffect(() => {
      !access && navigate('/');
      // eslint-disable-next-line
   }, [access]);

   const [characters, setCharacters] = useState([])


   const onSearch =(id) =>{
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
         .then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
   }

   const onClose = (id)=>{
      setCharacters(
         characters.filter((character) => character.id !== Number(id))
      )
   }

   const location = useLocation()



   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav onSearch={onSearch}/> }
         
         
         <Routes>
            <Route path='/' element={<Form login={login} />}></Route>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
      </div>
   );
}

export default App;
