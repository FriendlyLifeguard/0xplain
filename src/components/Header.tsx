import Link from "next/link"
import {memo} from "react"
import Image from 'next/image'

function header() {
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
    <div className="text-right text-2xl ">
      <Link href="/createPost" className="inline-block text-white py-2 px-4 bg-emerald-500 hover:bg-emerald-600 rounded-lg shadow-md transition-colors duration-300 ease-in-out cursor-pointer" >
        + Create Data Story
      </Link>
    </div>
 </div>
 </>
  )

}

export default memo(header);