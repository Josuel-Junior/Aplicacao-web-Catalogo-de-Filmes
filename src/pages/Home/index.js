import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom'

import './home.css'

import api from '../../services/api'


function Home() {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadMovie() {

            const response = await api.get('movie/now_playing', {
                params: {
                    api_key: '05c2c23f529d984ffaf8b7468c146bfc',
                    language: 'pt-BR',
                    page: '1',
                }
            })
            setMovies(response.data.results.slice(0, 16))
            setLoading(false);
        }

        loadMovie()
    }, [])


    if (loading) {
        return (
            <div className='loading'>
                <h2>Carregando...</h2>
            </div>
        )
    }


    return (

        <div className='container'>
            <div className='list-movies'>
                {movies.map((movie) => {
                    return (
                        <article key={movie.id}>
                            <Link to={`/filme/${movie.id}`}>
                                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                            </Link>
                            <Link className='button' to={`/filme/${movie.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>


    )
}

export default Home; 