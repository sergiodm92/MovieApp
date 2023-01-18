// Libreries
import swal from "@sweetalert/with-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router"
// Styles
import '../css/bootstrap.min.css'
import '../css/detail.css'




function Detail () {

    let query = new URLSearchParams(window.location.search);
    let id = query.get('id')
    const [movie,setMovie] = useState({});
    let token = sessionStorage.getItem('token')

    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/movie/${id}?api_key=5c5b222e1138fbd174d1d48e8f5c78ed&language=es-ES&page=1`
        //76600
        axios
            .get(endPoint)
            .then(response => {
                const apiData = response.data
                setMovie(apiData)
            })
            .catch(error=>{
                swal(<h2>Pasaron cosas, intenta mas tarde</h2>)
            })
    }, [id]);
    console.log(movie)
    return(
        <>
        {token? 
            <div className="container-detail">
                <div className="row container-detail">
                    <div className="col-4">
                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="card-img" alt="..."/>
                    </div>
                    <div className="col-8">
                        <h5>{movie.original_title}</h5>
                        <br/>
                        <h5>Overview:</h5>
                        <p>{movie.overview}</p>
                        <h5>Genres:</h5>
                        <ul>
                        {movie.genres?.map((gener,i)=>{
                            return(
                                <li key={i}>{gener.name}</li>
                            )
                        })}
                        </ul>
                    </div>
                </div>
                
            </div>
            :
            <Navigate to="/"/>
        }
        </>
        )
        
}

export default Detail