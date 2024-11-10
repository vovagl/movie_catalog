
import css from './movieCard.module.css';
function MovieCard({ movie, max }) {




    return (
        <>
            <img className={css.image} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="Film logo" />
            <h1>{movie.original_title}</h1>
            <div className={css.overview}>
                {movie.overview}<br></br>
            </div>
            <div className={css.info}>
                <div className={css.rating}>{movie.popularity}
                </div>
                <meter className={css.progress} value={movie.popularity} max={max}></meter>
            </div>
        </>
    )
}


export default MovieCard;