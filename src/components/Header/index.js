import './header.css';
import { Link } from 'react-router-dom';
import {FaHeart, FaHome} from 'react-icons/fa'


function Header(){
   

    return(

        <header>
            <Link to='/'>
                <FaHome/>
                <span>Filmes</span>
            </Link>

            <Link to='/favorites'>
                        <div className='list-favorite'>
                        <FaHeart/>
                        </div>
                        <span>Favoritos</span>
            </Link>
        </header>
    )
}

export default Header;