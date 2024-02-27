import Link from "next/link"
import {memo, useState} from "react"
import Image from 'next/image'

function header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return(
  <>
    <div className='flex justify-between items-center plex-medium px-20 py-9'>
      <Link href="/">
        <div className="flex items-center space-x-2">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <div className="text-4xl">
            <span>0xPlain</span>
          </div>
        </div>
    </Link>

    {/* Browse button in the center */}
    <div>
      <Link href="/browse">
        <div className="text-xl hover:underline hover:text-blue-500 transition-colors duration-300 ease-in-out">
          Browse
        </div>
      </Link>
    </div>


    <div className="flex items-center space-x-4">
          {/* Avatar Icon */}
          <div className="relative">
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="inline-flex items-center justify-center w-10 h-10 text-sm font-medium rounded-full">
              <Image src="/monkey.png" alt="User Avatar" width={40} height={40} className="rounded-full" />
            </button>

          {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                <Link href="/account">
                  <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Account</div>
                </Link>
                <Link href="/settings">
                  <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</div>
                </Link>
                <Link href="/logout">
                  <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Log Out</div>
                </Link>
              </div>
            )}
          </div>


    {/* <div className="text-right text-2xl "> */}
      <Link href="/createPost" className="inline-block text-white py-2 px-4 bg-emerald-500 hover:bg-emerald-600 rounded-lg shadow-md transition-colors duration-300 ease-in-out cursor-pointer" >
        + Create
      </Link>
    {/* </div> */}
    </div>
 </div>
 </>
  )

}

export default memo(header);