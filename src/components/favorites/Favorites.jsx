import { connect } from "react-redux";
import Card from "../Card/Card";

function Favorites ({myFavorites}){

    return(
        <>
            {myFavorites?.map((favorite)=>{
                return (
                    <Card
                    key={favorite.id}
                    id={favorite.id}
                    name={favorite.name}
                    species={favorite.species}
                    gender={favorite.gender}
                    image={favorite.image}
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