// Libreries
import { Link, Navigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios'
import swal from '@sweetalert/with-react'
// Styles
import '../css/bootstrap.min.css'
import '../css/list.css'


//https://api.themoviedb.org/3/discover/movie?api_key=5c5b222e1138fbd174d1d48e8f5c78ed&language=es-ES&page=1
//apikey=5c5b222e1138fbd174d1d48e8f5c78ed
function List (props) {
    
    let token = sessionStorage.getItem('token')


    const [ moviesList, setMovieList] = useState([])

    useEffect(() => {
        const endPoint = "https://api.themoviedb.org/3/discover/movie?api_key=5c5b222e1138fbd174d1d48e8f5c78ed&language=es-ES&page=1"
        axios
            .get(endPoint)
            .then(response => {
                const apiData = response.data
                setMovieList(apiData.results)
            })
            .catch(error=>{
                swal(<h2>Pasaron cosas, intenta mas tarde</h2>)
            })
    }, [moviesList])

    return(
        <>
        {token? 
            <div className="row card-film">
            {moviesList.map((a,i)=>{ 
                        return(
                    <div className="col-3" key={i}>
                            <div className="card" >
                                <img src={`https://image.tmdb.org/t/p/original${a.backdrop_path}`} className="card-img-top" alt="..."/>
                                <button 
                                className="favourite-btn"
                                onClick={props.addOrRemoveFromFavs}
                                data-movie-id={a.id}
                                >🖤</button>
                                <div className="card-body">
                                    <h5 className="card-title">{a.title}</h5>
                                    <p className="card-text">{a.overview.slice(0,200)+"..."}</p>
                                    <Link to={`/Detail?id=${a.id}`} className="btn btn-primary">View detail</Link>
                                </div>
                            </div>
                    </div>
                    )})}
            </div>
            :
            <Navigate to="/"/>
        }
        </>

    )

}

export default List