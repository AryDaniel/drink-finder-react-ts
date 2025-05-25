import { useEffect, useMemo } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { useAppStore } from "../stores/useAppStore"

export default function Header() {
  const {pathname} = useLocation()
  const isHome = useMemo(() => pathname === '/',[pathname])

  const fetchCategories = useAppStore((state) => state.fetchCategories)
  useEffect(() => {
    fetchCategories()
  }, [])
  const categories = useAppStore((state) => state.categories)

  return (
    <header className={isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'}>
        <div className="mx-auto container px-5 py-16">
            <div className="flex justify-between items-center">
                <div>
                    <img src="/logo.svg" alt="logo" className="w-32" />
                </div>

                <nav className="flex gap-4">
                  <NavLink
                    to="/"
                    className={({isActive}) => 
                      isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
                    }
                  >Index</NavLink>
                  <NavLink
                    to="/favorites"
                    className={({isActive}) => 
                      isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
                    }
                  >favorites</NavLink>
                </nav>

            </div>
            { isHome && (
              <form
                className="md:w-1/2 2xl:1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
              >
                <div className="space-y-4">
                  <label 
                    htmlFor="ingredient"
                    className="block text-white uppercase font-extrabold text-lg"
                  >Name or Ingredient</label>

                  <input
                    type="text"
                    id='ingridient'
                    name="ingridient"
                    className="p-3 w-full rounded-lg focus:outline-none"
                    placeholder="Name or Ingredient. Ex: Vodka, Gin, Rum, etc."
                  
                  />
                </div>
                <div className="space-y-4">
                  <label 
                    htmlFor="category"
                    className="block text-white uppercase font-extrabold text-lg"
                  >Category</label>

                  <select
                    id='category'
                    name="category"
                    className="p-3 w-full rounded-lg focus:outline-none"
                  >
                    <option value="">-- Select --</option>
                    {categories.drinks.map((category) => (
                      <option
                        key={category.strCategory}
                        value={category.strCategory}
                      >
                        {category.strCategory}
                      </option>
                    ))}
                  </select>
                </div>
                <input
                  type="submit"
                  value='Search Recipes'
                  className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase"
                />
              </form>
            )}
        </div>
    </header>
  )
}
