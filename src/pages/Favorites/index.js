import { useEffect, useState } from 'react';
import './favorites.css'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

function Favorites(){

    const [movie, setMovie] = useState([])

    useEffect(()=>{

        const myList = localStorage.getItem('@mymovie')
        setMovie(JSON.parse(myList) || [])
    },[])

    function deleteMovie(id){

        let filterMovie = movie.filter((item)=>{
            return (item.id !== id)
        })

        setMovie(filterMovie);

        localStorage.setItem('@mymovie', JSON.stringify(filterMovie))
        toast.success('Filme removido com sucesso')
    
    }

    return(

        <div className='container-mymovies'>
            <h1>Tela de Favoritos</h1>
            <div className='my-movies'>
            {movie.length === 0 && <span>Você não possui Filme salvo</span>}
                {movie.map((item) => {
                    return(
                        <section key={item.id}>
                            <span>{item.title}</span>
                            <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title}/>
                            <div className='buttons'>
                                <Link to={`/filme/${item.id}`}>
                                <button  className='details'>Detalhes</button>
                                </Link>
                                <button className='delete' onClick={()=> deleteMovie(item.id) }>Excluir</button>
                            </div>
                        </section>
                    )
                })}
            </div>
        </div>
    )
}


export default Favorites;