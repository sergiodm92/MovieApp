// Libreries
import { Routes, Route} from 'react-router-dom';

// Components
import Login from './components/Login';
import List from './components/List';
import Header from './components/Header';
import Footer from './components/Footer';
import Detail from './components/Detail';
import Results from './components/Results';

// Styles
import './css/bootstrap.min.css'
import './App.css'
import Favourites from './components/Favourites';





function App() {

  const favMovies = localStorage.getItem('favs');

  let tempMoviesInFavs;

  if(favMovies === null){
    tempMoviesInFavs = [];
  } else {
    tempMoviesInFavs = JSON.parse(favMovies)
  }

  console.log(tempMoviesInFavs)

  const addOrRemoveFromFavs = (e) =>{
    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector('img').getAttribute('src');
    const title = parent.querySelector('h5').innerText;
    const overview = parent.querySelector('p').innerText;
    const movieData = {
      imgURL, title, overview, 
      id: btn.dataset.movieId
    }
    let movieIsInArray = tempMoviesInFavs.find(a=>{
      a.id === movieData.id
    })
    if(!movieIsInArray){
      tempMoviesInFavs.push(movieData)
    } else{
      let moviesLeft = tempMoviesInFavs.filter(a=>{
        a.id !== movieData.id
      });
      localStorage.setItem('favs',moviesLeft)
    }
    localStorage.setItem('favs', JSON.stringify(tempMoviesInFavs))

  }

  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/List" element={<List addOrRemoveFromFavs={addOrRemoveFromFavs} />}/>
        <Route path="/Detail" element={<Detail/>}/>
        <Route path="/Favourites" element={<Favourites/>}/>
        <Route path="/Results/:keyword" element={<Results/>}/>

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
