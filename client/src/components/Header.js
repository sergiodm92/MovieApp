// Libreries
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"

// Styles
import '../css/bootstrap.min.css'
import '../css/header.css'
import Search from "./Search"

function Header (){

    return(
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" >
                <div className="container-fluid">
                    <a className="navbar-brand" >InvestingMovies</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                        <Link className="nav-link active" aria-current="page" to='/List'>List</Link>
                        <Link className="nav-link active" aria-current="page" to='/Favourites'>Favourites</Link>
                    </div>
                    </div>
                    <Search/>  
                </div>
            </nav>
        </header>
    )
}

export default Header