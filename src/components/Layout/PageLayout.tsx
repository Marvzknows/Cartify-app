import { ReactNode } from "react"
import Footer from "../Footer/Footer"

type PageLayoutType = {
    children: ReactNode
}

const PageLayout = ({ children }: PageLayoutType) => {

    return(
        <div className="bg-light flex items-center flex-col w-full min-h-screen px-4 py-4 shadow-2xl">
            {/* <div className="bg-lighter min-h-screen rounded-t-lg w-full p-2.5 md:py-3 md:px-10 sm:w-full md:w-[80%]"> */}
            <div className="bg-lighter min-h-screen rounded-t-lg w-full md:max-w-[1280px] p-2.5 md:py-3 md:px-10 ">
                {children}
            </div>
            <div className="bg-lighter rounded-b-lg w-full sm:w-full md:w-[80%]">
                <Footer />
            </div>
        </div>
    )
}

export default PageLayout;