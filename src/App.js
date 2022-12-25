import { 
  BrowserRouter, 
  Routes, 
  Route } from "react-router-dom";
import "./styles/App.css";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import MovieList from "./components/movieList/movieList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="movie/:id" element={<h1>Movie detail page</h1>}/>
        <Route path="movies/:type" element={<MovieList/>}/>
        <Route path="/*" element={<h1>Error Page</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
