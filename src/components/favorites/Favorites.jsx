import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";

function Favorites ({myFavorites}){

    const [aux, setAux] = useState(false)

    const dispatch = useDispatch()

    const handleOrder = (event)=>{
        dispatch(orderCards(event.target.value))
        setAux(!aux)
    }

    const handleFilter = (event)=>{
        dispatch(filterCards(event.target.value))
    }


    return(
        <>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleOrder}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
            {myFavorites?.map((favorite)=>{
                return (
                    <Card
                    key={favorite.id}
                    id={favorite.id}
                    name={favorite.name}
                    species={favorite.species}
                    gender={favorite.gender}
                    image={favorite.image}
                    onClose={favorite.onClose}
                    />
                )
            })}

        </>
    )
}

const mapStateToProps = (state)=>{
    return {myFavorites: state.myFavorites}
}

export default connect(
    mapStateToProps,
    null
)(Favorites)