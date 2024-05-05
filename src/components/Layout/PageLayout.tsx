import { ReactNode } from "react"

type PageLayoutType = {
    children: ReactNode
}

const PageLayout = ({ children }: PageLayoutType) => {

    return(
        <div className="bg-light h-screen flex justify-center items-center flex-col px-4 py-4 shadow-2xl w-screen">
            <div className="bg-lighter rounded-lg p-4 h-full w-full sm:w-full md:w-[80%]">
                {children}
            </div>
        </div>
    )
}

export default PageLayout;