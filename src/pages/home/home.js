import React, { useEffect, useState } from "react";
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const Home = () => {

const [popularMovies, setPopularMovies]=useState([]);
useEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=fe14e7e0569e940a0ff967d375af6744&language=en-US")
    .then(res=>res.json())
    .then(data=>setPopularMovies(data.results))
},[]);

    return(
        <React.Fragment>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie =>(
                            <div className="posterImage">
                                <img src="" />

                            </div>
                        ))
                    }

                </Carousel>
            </div>
         </React.Fragment>

    )
}

export default Home;