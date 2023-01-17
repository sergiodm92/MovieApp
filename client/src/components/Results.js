import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios'
import swal from '@sweetalert/with-react'

import '../css/results.css'



function Results(){

    let keyword = useParams().keyword

    const [moviesResults,setMoviesResults] = useState([])

    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=5c5b222e1138fbd174d1d48e8f5c78ed&language=es-ES&page=1&include_adult=false&query=${keyword}`;
        axios
            .get(endPoint)
            .then(response => {
                const apiData = response.data
                if(apiData.results.length>0){
                setMoviesResults(apiData.results)
                }
                else swal(
                    <div>
                        <h3>No found</h3>
                        <img src="https://i0.wp.com/psicorumbo.com/wp-content/uploads/2018/04/como-dejar-de-estar-triste-1.jpg?resize=900%2C505" className="image-notFound"/>
                    </div>
                )
            })
            .catch(error=>{
                swal( <h2>Pasaron cosas, intenta mas tarde</h2>)
            })
    },[keyword])

    return(
       
         <>
            <div className="row card-film">
            <h1>You search: {keyword}</h1>
            {moviesResults.length === 0 && <h3>No hay resultados</h3>}
            {moviesResults.map((a,i)=>{ 
                        return(
                    <div className="col-4" key={i}>
                            <div className="card" >
                                <img src={a.backdrop_path?`https://image.tmdb.org/t/p/original${a.backdrop_path}`:"https://titanmamut.files.wordpress.com/2013/05/6457913-una-cinta-de-video-rota-todos-aislados-sobre-fondo-blanco.jpg?w=427&h=285"} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{a.title}</h5>
                                    <p className="card-text">{a.overview.slice(0,200)+"..."}</p>
                                    <Link to={`/Detail?id=${a.id}`} className="btn btn-primary">View detail</Link>
                                </div>
                            </div>
                    </div>
                    )})
            }
            </div>
        </>

    )
}

export default Results