import { useEffect, useState } from "react"
import { useProductContext } from "../context/Product"

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState({ name: "", category_id: "" })
    const { searchProducts , categories } = useProductContext();

    useEffect(() => { searchProducts(searchQuery) }, [searchQuery])
    return (
        <form className="flex max-w-screen-xl mx-auto">
            <select id="search-dropdown" name="search-dropdown" className="flex-shrink-0 z-10 bg-primary inline-flex p-3 text-sm font-medium text-white rounded-l-md " onChange={(e) => setSearchQuery({ ...searchQuery, category_id: e.target.value })}>
                <option value="">All Categories</option>
                {
                    categories?.map((item, i) => <option key={i} value={item.id}>{item.name}</option>)
                }
            </select>

            <div className="relative w-full">
                <input type="search" className="block p-4 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-md border-l-gray-50 border-l-2 border border-gray-300 focus:ring-orange-500 focus:border-orange-500" placeholder="Search Mockups, Logos, Design Templates..." required onChange={(e) => setSearchQuery({ ...searchQuery, name: e.target.value })} />
            </div>
        </form>
    )
}

export default SearchBar