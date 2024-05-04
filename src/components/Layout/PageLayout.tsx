import { ReactNode } from "react"

type PageLayoutType = {
    children: ReactNode
}

const PageLayout = ({ children }: PageLayoutType) => {

    return(
        <div className="bg-light h-screen flex justify-center items-center flex-col p-4 w-screen">
            <div className="border border-danger h-full md:w-[1080px]">
                {children}
            </div>
        </div>
    )
}

export default PageLayout;