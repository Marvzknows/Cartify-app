import { ReactNode, useEffect } from "react";
import { IoClose } from "react-icons/io5";

type CartToastTypes = {
    children: ReactNode,
    variant: 'success' | 'danger' | 'warning' | 'primary',
    position: 'center' |'topleft' | 'topright' | 'top' | 'bottomleft' | 'bottomright' | 'bottom',
    isShowToast: React.Dispatch<React.SetStateAction<boolean>>,
    showToast?: boolean
}

type ToastPositioType = {
  [key: string]: string;
  topleft: string;
  topright: string;
  center: string;
  top: string;
  bottom: string;
};

const CartToast = (props:CartToastTypes) => {

    const { children, variant, position, isShowToast, showToast } = props;

    useEffect(() => {
        if(showToast) {
            setTimeout(() => {
                isShowToast(false);
            }, 3000);
        }
    },[showToast])

    const toastPostionObj:ToastPositioType  = {
        topleft : 'fixed top-0 left-0 transform translate-x-1/2 translate-y-1/2',
        topright: 'fixed top-0 right-0 transform -translate-x-1/2 translate-y-1/2',
        center: 'fixed top-[50px] left-1/2 transform -translate-x-1/2',
        top: 'fixed top-[50px] left-1/2 transform -translate-x-1/2',
        bottom: 'fixed bottom-[50px] left-1/2 transform -translate-x-1/2' ,
        bottomleft: 'fixed bottom-0 left-0 transform translate-x-1/2 -translate-y-1/2',
        bottomright: 'fixed bottom-0 right-0 transform translate-x-[-90px] translate-y-[-30px]',
    }

    const positionClass = position ? toastPostionObj[position.toLowerCase()] : toastPostionObj.center;
    const hoverColor = `bg-${variant.toLowerCase()}light`;
 
    return(
        <>
            <div className={`${positionClass} w-64 bg-${variant.toLowerCase()} px-3 py-2 rounded-md shadow-lg cursor-pointer hover:${hoverColor}`}>
                <div className={`flex justify-between items ${variant.toLocaleLowerCase() === 'warning' ? 'text-dark' : 'text-slate-100'} font-normal text-xs`}>
                    {children}
                    <IoClose onClick={() => (isShowToast(false))} className="font-semibold cursor-pointer hover:text-dark" />
                </div>
            </div>
        </>
    )
}

export default CartToast