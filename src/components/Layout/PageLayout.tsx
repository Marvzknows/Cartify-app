import { ReactNode } from "react"

type PageLayoutType = {
    children: ReactNode
}

const PageLayout = ({ children }: PageLayoutType) => {

    return(
        <div className="bg-light flex items-center flex-col w-full min-h-screen px-4 py-4 shadow-2xl">
            <div className="bg-lighter rounded-lg w-full p-2.5 md:py-3 md:px-10 sm:w-full md:w-[80%]">
                {children}
            </div>
        </div>
    )
}

export default PageLayout;