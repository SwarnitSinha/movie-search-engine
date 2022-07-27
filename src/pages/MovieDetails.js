import{ useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovieById } from '../utils/tmdbApi';

function MovieDetails() {
    const params = useParams()
    const [movieDetails, setMovieDetails] = useState(null);
    const imageBaseUri = 'https://image.tmdb.org/t/p/original'
    const fetchMovieDeatils = async ()=>{
        const data = await fetchMovieById(params.id)
        setMovieDetails(data)
    }
    useEffect(() => {
        fetchMovieDeatils()
    }, [])
    return (
        <div className='movie-details-page'>
            {movieDetails && 
                <img 
                    className='backgrounder-poster' 
                    src={imageBaseUri+movieDetails.backdrop_path} 
                    alt="background-poster" 
                />
            }
            <div className="backgrounder-poster-cover">
            </div>
            
            {console.log(movieDetails)}
            {movieDetails &&
                <div className='movies-details'>
                    <div>
                        <h1>{movieDetails.title}</h1>
                        <h3>{movieDetails.tagline}</h3>
                        <p>{movieDetails.overview}</p>
                        <span>Genere: </span>
                        {
                            movieDetails && movieDetails.genres.map((gn)=><span>{gn.name}, </span>)
                        }
                        <p></p>
                        <p>Release Date : {movieDetails.release_date}</p>
                        <p>Runtime : {movieDetails.runtime} Minutes</p>
                        <p>Rating : {movieDetails.vote_average}</p>
                    </div>
                    <div className='movei-deatils'>

                    </div>
                </div>
            }
        </div>
    )
}
export default MovieDetails