import Link from "next/link"
import {memo} from "react"
import Image from 'next/image'

function header() {
  return(
    <nav className='flex items-center justify-between flex-wrap pb-10 pt-2 max-w-7xl w-full'>
      <div className='flex items-center'>
        <Link href="/">
          <Image className="" src="/greenbird.jpg" alt="Greenbird" width={100} height={100} />
        </Link>  
      </div>

        <div className='flex'>
        <Link href="/graph">
            <h1 className="font-medium text-black hover:text-purple-700 transition duration-500 ease-out border-b-2 border-transparent hover:border-purple-700 px-3 mr-6 mb-3 md:mb-0">
             Graphs
            </h1>
        </Link>
        </div>
    </nav>
  )

}

export default memo(header);