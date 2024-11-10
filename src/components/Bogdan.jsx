
import axios from "axios"; import { useEffect } from "react";
import css from './Bogdan.module.css';
import Buttons from "./Buttons";
import MovieCard from "./MovieCard";
import { useState } from "react";

const API_KEY = "569a626449cb32e3f1ff7230420b1dce";

function Bogdan() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [state, setState] = useState(false);

    function openList() {
        setState(!state)
    };

    function OnClickNext() {
        setPage(page + 1)
    };

    function OnClickPrev() {
        if (page > 1) {
            setPage(page - 1)
        }
    };

    function ShowPage(number) {
        setPage(page + number)
    };

    function isReturn() {
        window.scrollTo(0, 0)
    };

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
                setMovies([...response.data.results])
            } catch {
                console.log("error !!!");
            }
        }
        fetch()
    }, [page]);

    let x = movies.map((movie) => movie.popularity)
    let max = Math.max(...x)

    return (
        <>
            <div className={css.header}>
                <button className={css.button} style={{ backgroundColor: state ? 'red' : 'green' }} onClick={openList}>SHOW</button>
                <Buttons nextOnClick={OnClickNext} prevOnClick={OnClickPrev}
                    showPage={ShowPage}
                    page={page} />
                <h3>PAGE:{page}</h3>
            </div>
            <div className={css.content}>
                {state &&
                    movies.map((movie, index) => (
                        <div className={css.cards} key={movie.id}>
                            <MovieCard movie={movie} max={max} />
                        </div>
                    ))}
            </div >
            <button className={css.return} onClick={isReturn}>RETURN</button>
        </>
    )

}

export default Bogdan;