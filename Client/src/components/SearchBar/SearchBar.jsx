import styles from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar({onSearch}) {

   const [id, setId] = useState('')

   const handleChange = (event)=>{
      setId(event.target.value)
   }

   return (
      <div className={styles.nav}>
         <input type='search' placeholder='ID....' value={id} onChange={handleChange}/>
         <button onClick={()=> {onSearch(id); setId('')}} className={styles.btn}>Agregar</button>
      </div>
   );
}
