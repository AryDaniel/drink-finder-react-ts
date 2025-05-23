import { BrowserRouter, Routes, Route } from "react-router-dom"
import IndexPages from "./views/IndexPages"
import FavoritesPages from "./views/FavoritesPages"

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<IndexPages />}/>
            <Route path='/favorites' element={<FavoritesPages />}/>
        </Routes>
    </BrowserRouter>
  )
}
