import { BrowserRouter, Routes, Route } from "react-router-dom"
import IndexPages from "./views/IndexPages"
import FavoritesPages from "./views/FavoritesPages"
import Layout from "./layouts/Layout"

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
              <Route path='/' element={<IndexPages />} index/>
              <Route path='/favorites' element={<FavoritesPages />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
