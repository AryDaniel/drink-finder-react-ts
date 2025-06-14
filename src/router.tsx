import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layouts/Layout"
import { lazy, Suspense } from "react"
import GenerateAI from "./views/GenerateAI"
const IndexPages = lazy(() => import("./views/IndexPages"))
const FavoritesPages = lazy(() => import("./views/FavoritesPages"))

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
              <Route path='/' element={
                <Suspense fallback="Loading...">
                  <IndexPages />
                </Suspense>
              } index/>
              <Route path='/favorites' element={              
                <Suspense fallback="Loading...">
                  <FavoritesPages/>
                </Suspense>
              }/>
              <Route path='/ai' element={              
                <Suspense fallback="Loading...">
                  <GenerateAI />
                </Suspense>
              }/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
