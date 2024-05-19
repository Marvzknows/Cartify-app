import { useMemo } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

type PaginationType = {
    nextPage: () => void,
    prevPage: () => void,
    itemsLength: number,
    disablePaginationButton: {
        nextBtn: boolean;
        prevBtn: boolean;
    },
    setCurrentPage:React.Dispatch<React.SetStateAction<number>>,
    curentPage: number;
    NvigatePageNumber: (buttonId: number) => void
}

const Pagination = (props: PaginationType) => {

    const { nextPage, prevPage, itemsLength, disablePaginationButton, setCurrentPage, curentPage, NvigatePageNumber } = props;


    const renderPagesButton = (itemsCount: number) => {
        // console.log('re-rendering');
        const nunberOfPage = itemsCount / 4; // To Expect/Fix: pano pag hindi whole number ang itemsCount na pinasa ex. 23 ang total...
        const pageNumber = [];
        for(let i = 0; i < nunberOfPage; i++) {
            pageNumber.push(
              <button
                onClick={() => NvigatePageNumber(i + 1)}
                key={i}
                className={`${curentPage === i + 1 && 'bg-slate-400 text-white'} border border-slate-800 rounded text-slate-700 text-xs py-2 px-4 hover:bg-slate-200 font-bold transition-all duration-300 ease`}
              >
                {i + 1}
              </button>
            );
        }

        return pageNumber;
    }


    const memoizedPaginationPages = useMemo(() => renderPagesButton(itemsLength), [itemsLength, curentPage]);


    return(
        <div className="flex justify-end items-center gap-1 px-2">
            <button onClick={prevPage} className="border border-slate-800 rounded text-slate-700 text-sm py-2 px-4 hover:bg-slate-200 disabled:bg-slate-300 disabled:border-none" disabled={disablePaginationButton.prevBtn} >
                <GrPrevious className="font-bold" />
            </button>

            {memoizedPaginationPages}
            
            <button onClick={nextPage} className="border border-slate-800 rounded text-slate-700 text-sm py-2 px-4 hover:bg-slate-200 disabled:bg-slate-300 disabled:border-none" disabled={disablePaginationButton.nextBtn} >
                <GrNext className="font-bold" />
            </button>
        </div>
    )
}

export default Pagination;