import { FaSearch } from "react-icons/fa";
import { TfiCommentAlt } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";

function Navbar() {
    return (
        <header>
            <nav className="flex justify-between items-center p-2">
                <div className="flex items-center">
                    <img src="/onanmedia-logo.svg" alt="onanmedia-logo" width={160} height={42.31} />
                    <div className="flex justify-center items-center ml-12 w-[720px] rounded-md border border-black/20">
                        <input
                            placeholder='Coba ketikkan "Diskusi"'
                            className='w-full bg-white text-xs p-2'
                        />
                        <button className="bg-slate-250">
                            <FaSearch
                                size={20}
                                className="m-2"
                            />
                        </button>
                    </div>
                </div>
                <div className="flex justify-center items-center p-2">
                    <div className="grid grid-cols-3 items-center gap-3 pr-5 border-r-2 border-black/15">
                        <a>
                            <TfiCommentAlt
                                size={20}
                                className="opacity-50"
                            />
                        </a>
                        <a>
                            <CiHeart
                                size={25}
                                className="opacity-60"
                            />
                        </a>
                        <a>
                            <IoIosNotificationsOutline
                                size={25}
                                className="opacity-60"
                            />
                        </a>
                    </div>
                    <div className="flex justify-center items-center ml-5">
                        <div className="avatar">
                            <div className="w-8 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div className="ml-2 text-sm text-slate-600">
                            <span>Ramandhanu Yuchnan Utomo</span>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar