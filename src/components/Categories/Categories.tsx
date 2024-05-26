type CategoriesType = {
    getProductsFromCategory: (categoryName: string) => Promise<void>;
    getAllProducts: () => void;
}

const Categories = ({ getProductsFromCategory, getAllProducts }: CategoriesType) => {

    return(
        <div className="flex justify-between items-center gap-4 mt-5 overflow-auto">
            <button onClick={() => getAllProducts()} className="w-full py-2 px-4 whitespace-nowrap rounded-md bg-[#d4d4d8] text-dark font-bold text-md active:bg-slate-200 focus:bg-slate-200 hover:bg-slate-300">
                All
            </button>
            <button onClick={() => getProductsFromCategory('electronics')} className="w-full py-2 px-4 whitespace-nowrap rounded-md bg-[#d4d4d8] text-dark font-bold text-md active:bg-slate-200 focus:bg-slate-200 hover:bg-slate-300">
                Electronics
            </button>
            <button onClick={() => getProductsFromCategory('jewelery')} className="w-full py-2 px-4 whitespace-nowrap rounded-md bg-[#d4d4d8] text-dark font-bold text-md active:bg-slate-200 focus:bg-slate-200 hover:bg-slate-300">
                Jewelry
            </button>
            <button onClick={() => getProductsFromCategory("men's clothing")} className="w-full py-2 px-4 whitespace-nowrap rounded-md bg-[#d4d4d8] text-dark font-bold text-md active:bg-slate-200 focus:bg-slate-200 hover:bg-slate-300">
                Mens's Clothing
            </button>
            <button onClick={() => getProductsFromCategory("women's clothing")} className="w-full py-2 px-4 whitespace-nowrap rounded-md bg-[#d4d4d8] text-dark font-bold text-md active:bg-slate-200 focus:bg-slate-200 hover:bg-slate-300">
                Women's Clothing
            </button>
        </div>
    )
}

export default Categories