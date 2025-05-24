import { useAppStore } from "../stores/useAppStore"

export default function IndexPages() {
  useAppStore((state) => state.categories)
  
  return (
    <h1>Index</h1>
  )
}
