import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'

import './movie-info.css'

import api from '../../services/api'

function Filme() {

    const { id } = useParams();
    const [movieData, setMovieData] = useState({})
    const [loading, setLoading] = useState(true)
    const navigation = useNavigate();


    useEffect(() => {
        async function loadMovie() {

            await api.get(`/movie/${id}`, {
                params: {
                    api_key: '05c2c23f529d984ffaf8b7468c146bfc',
                    language: 'pt-BR',
                }
            }).then((response) => {
                setMovieData(response.data);
                setLoading(false);
            })
                .catch(() => {
                    navigation('/', { replace: true })
                    return
                })
        }

        loadMovie()

        return () => {
        
        }
    }, [navigation, id])

    function saveMovie() {
        const myList = localStorage.getItem('@mymovie');

        let movieSave = JSON.parse(myList) || [];
        
        const hasMovie = movieSave.some((movieSave) => movieSave.id === movieData.id)

        if (hasMovie) {
            toast.warn('Esse filme já está na sua lista!')
            return;
        }

        movieSave.push(movieData);
        localStorage.setItem('@mymovie', JSON.stringify(movieSave));
        toast.success('Filme salvo com sucesso!')
    }


    if (loading) {
        return (
            <div className='movie-info'>
                <h1>Carregando...</h1>
            </div>

        )
    }


    return (

        <div className='container'>

            <div className='movie-info'>
                <h1>{movieData.title}</h1>
                <img src={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`} alt={movieData.title} />
                <h3>Sinopse</h3>
                <span>{movieData.overview}</span>
                <strong>Avaliação: {movieData.vote_average} / 10</strong>

                <div className='area-buttons'>
                    <button className='save' onClick={saveMovie}>Salvar</button>
                    <a target='blank' rel='external' href={`http://youtube.com/results?search_query=${movieData.title} trailer`}>
                        <button className='trailer'> Trailer</button></a>
                </div>
            </div>

        </div>

    )
}


export default Filme;