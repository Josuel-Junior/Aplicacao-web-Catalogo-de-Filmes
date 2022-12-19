import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Filme from './pages/Movie'
import Favorites from './pages/Favorites'
import Header from './components/Header';  


function RoutesApp(){
    return(

        <BrowserRouter>
        <Header/>
        <Routes>
            <Route  path='/' element={ <Home/> } />
            <Route  path='/filme/:id' element={<Filme/>} />
            <Route  path='/favorites' element={<Favorites/>} />
            <Route  path='*' element={<Home/>} />
        </Routes>
        </BrowserRouter>

    )
}

export default RoutesApp;