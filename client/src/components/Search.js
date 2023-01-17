// Libreries
import swal from '@sweetalert/with-react'
import {useNavigate } from 'react-router';


function Search () {
    const Navigate = useNavigate()

    const submitHandler = e =>{
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim();

        if(keyword.length === 0){
            swal(<h2>Debes escribir una palabra clave</h2>)
        }else if(keyword.length < 4){
            swal(<h2>Debes escribir una palabra con mas de 4 letras</h2>)
        }else {
            e.currentTarget.keyword.value = ''
            Navigate(`/results/${keyword}`)
        }

    }
    return (
        <form className="d-flex align-items-center" onSubmit={submitHandler}>
            <label className="form-label mb-0 mx-2">
                <input className="form-control" type="text" name="keyword" placeholder="Search movie..."/>
            </label>
            <button className="btn btn-success ml-2" type="submit">Search</button>
        </form>
    )
}

export default Search