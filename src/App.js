import { 
  BrowserRouter, 
  Routes, 
  Route } from "react-router-dom";
import "./styles/App.css";
import Header from "./components/header/header";
import Home from "./pages/home/home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="movie/:id" element={<h>Movie detail page</h>}/>
        <Route path="movies/:type" element={<h1>Movies list page</h1>}/>
        <Route path="/*" element={<h1>Error Page</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
