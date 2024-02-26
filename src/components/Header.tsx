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
            <span>DataStori</span>
          </div>
        </div>
    </Link>
    <div className="text-right text-2xl ">
      <Link href="/createstory" className="inline-block text- py-2 px-4 hover:bg-emerald-200 transition-colors duration-500 ease-in-out cursor-pointer" >
        + add
      </Link>
    </div>
 </div>
 </>
  )

}

export default memo(header);