const Categories = () => {

    return(
        <div className="flex justify-between items-center gap-4 mt-5 overflow-auto">
            <button className="w-full py-2 px-4 whitespace-nowrap rounded-md bg-[#d4d4d8] text-dark font-bold text-md hover:bg-slate-300">
                All
            </button>
            <button className="w-full py-2 px-4 whitespace-nowrap rounded-md bg-[#d4d4d8] text-dark font-bold text-md hover:bg-slate-300">
                Electronics
            </button>
            <button className="w-full py-2 px-4 whitespace-nowrap rounded-md bg-[#d4d4d8] text-dark font-bold text-md hover:bg-slate-300">
                Jewelry
            </button>
            <button className="w-full py-2 px-4 whitespace-nowrap rounded-md bg-[#d4d4d8] text-dark font-bold text-md hover:bg-slate-300">
                Mens's Clothing
            </button>
            <button className="w-full py-2 px-4 whitespace-nowrap rounded-md bg-[#d4d4d8] text-dark font-bold text-md hover:bg-slate-300">
                Women's Clothing
            </button>
        </div>
    )
}

export default Categories