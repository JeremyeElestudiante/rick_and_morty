import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Detail(){
    
    const {id} = useParams()

    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div style={{backgroundColor: "lightgray"}}>
            <h1>DETAIL</h1>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <h4>Origin | {character.origin?.name}</h4>
            <h4>Specie | {character.specie}</h4>
            <h4>Gender | {character.gender}</h4>
        </div>
    )
}