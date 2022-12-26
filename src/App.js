import { 
  BrowserRouter, 
  Routes, 
  Route } from "react-router-dom";
import "./styles/App.css";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import MovieList from "./components/movieList/movieList";
import MovieDetail from "./pages/movieDetail/movieDetail";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="movie/:id" element={<MovieDetail/>}/>
        <Route path="movies/:type" element={<MovieList/>}/>
        <Route path="/*" element={<h1>Error Page</h1>}/>
      </Routes>
      <Footer/>
      <br/>
      </BrowserRouter>
    </div>
  );
}

export default App;
