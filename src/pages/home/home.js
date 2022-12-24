import React, { useEffect, useState } from "react";
import "./home.css";

const Home = () => {


useEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=fe14e7e0569e940a0ff967d375af6744&language=en-US")
    .then(res=>res.json())
    .then(data=>console.log(data.results))
},[])

    return(
        <React.Fragment>
            Home Page is now rendered
         </React.Fragment>

    )
}

export default Home;