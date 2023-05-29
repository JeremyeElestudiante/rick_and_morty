import validation from '../Validation/Validation'
import styles from './Form.module.css'
import { useState } from 'react';
// eslint-disable-next-line
// import Validation from '../Validation/Validation';

export default function Form({login}){

    const [userData, setUserData] = useState({
        email: "",
        password: ""
     })

     const [errors, setErrors] = useState({})

     const handleChange = (event)=>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name] : event.target.value
        }))

    }
    
    const handleSubmit = (event)=>{
        event.preventDefault();
        login(userData)
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit} className={styles.div}>
                <label htmlFor="email">Email: </label>
                <input type="text" name='email' value={userData.email} onChange={handleChange}/>
                {errors.email && <p>{errors.email}</p>}
                <label htmlFor="password">Password: </label>
                <input type="password" name='password' value={userData.password}  onChange={handleChange}/>
                {errors.password && <p>{errors.password}</p>}
                <button>Submit</button>
            </form>
        </div>
    )
}