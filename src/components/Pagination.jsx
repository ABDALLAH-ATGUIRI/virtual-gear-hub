import { useState , useEffect} from "react"
import { useProductContext } from "../context/Product"

const Pagination = ({ current_page, per_page, total, last_page }) => {
    const {currentPage, setCurrentPage } = useProductContext();
    

    const handlePreviousPage = () => {
        if (currentPage > 1)
        setCurrentPage(currentPage - 1)
    }
    const handleNextPage = () => {
        if (currentPage <= last_page-1)
        setCurrentPage(currentPage + 1)
    }

    return (
        <div className="w-full flex items-center justify-between border-t border-gray-200 bg-gray-20 px-4 py-6 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
                <a href="#" className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-md flex gap-1 text-gray-700">
                        Showing
                        <span className="font-medium">{current_page}</span>
                        to
                        <span className="font-medium">{per_page}</span>
                        of
                        <span className="font-medium">{total}</span>
                        results
                    </p>
                </div>
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-lg shadow-sm border-2" aria-label="Pagination">
                        <button className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" onClick={()=>handlePreviousPage()}>
                            <span className="sr-only">Previous</span>
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                            </svg>
                        </button>

                        {Array.from(Array(last_page), (e, i) => {
                            return <button key={i} onClick={() => setCurrentPage(i + 1)} className={`relative z-10 inline-flex items-center ${currentPage == i + 1 ? 'bg-orange-600 text-white ' : ' bg-transparent text-black'} px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}>{i + 1}</button>
                        })}

                        <button className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" onClick={()=>handleNextPage()}>
                            <span className="sr-only">Next</span>
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Pagination