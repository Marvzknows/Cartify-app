const AccountDropdown = () => {
    
    return(
        <div className="w-[160px] flex flex-col bg-slate-300 text-xs border-gray-400 shadow-xl rounded">
            <div className=" font-medium p-3 cursor-pointer hover:bg-slate-200">
                Change password
            </div>
            <div className=" font-medium p-3 cursor-pointer hover:bg-slate-200">
                Logout
            </div>
        </div>
    )
}

export default AccountDropdown;