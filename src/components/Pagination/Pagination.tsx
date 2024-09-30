import { useEffect, useMemo } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

type PaginationType = {
    nextPage: () => void,
    prevPage: () => void,
    itemsLength: number,
    disablePaginationButton: {
        nextBtn: boolean;
        prevBtn: boolean;
    },
    curentPage: number;
    setDisablePaginationButton:React.Dispatch<React.SetStateAction<{
        nextBtn: boolean;
        prevBtn: boolean;
    }>>
}

const Pagination = (props: PaginationType) => {

    const { nextPage, prevPage, itemsLength, disablePaginationButton, curentPage, setDisablePaginationButton } = props;

    const memoizePageLength = useMemo(() => {
        return Math.ceil(itemsLength / 4);
    }, [itemsLength])

    useEffect(() => {
        if(memoizePageLength === curentPage) {
            setDisablePaginationButton((prev) => ({...prev, nextBtn: true}));
        }
    },[curentPage])


    return(
        <div className="flex justify-end items-center gap-1 px-2 py-4">
            <button onClick={prevPage} className="rounded text-slate-700 text-sm py-2 px-4 hover:bg-slate-200 disabled:bg-slate-300 disabled:border-none" disabled={disablePaginationButton.prevBtn} >
                <GrPrevious className="font-bold" />
            </button>

            <div className=" border-danger text-xs">
                <p> {curentPage} / {memoizePageLength}</p>
            </div>
            
            <button onClick={nextPage} className="rounded text-slate-700 text-sm py-2 px-4 hover:bg-slate-200 disabled:bg-slate-300 disabled:border-none" disabled={disablePaginationButton.nextBtn} >
                <GrNext className="font-bold" />
            </button>
        </div>
    )
}

export default Pagination;