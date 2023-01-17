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




function App() {



  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/List" element={<List/>}/>
        <Route path="/Detail" element={<Detail/>}/>
        <Route path="/Results/:keyword" element={<Results/>}/>

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
