import Link from "next/link"
import {memo} from "react"
import Image from 'next/image'

function header() {
  return(
    <nav className='flex items-center flex-wrap pb-10 pt-2 max-w-7xl'>
      <div className='relative flex h-16 items-center justify-between'>
        <Link
          className='relative flex h-16 items-center justify-between'
          href="/"
        >
          <div className='flex'>
            <Image className="" src="/greenbird.jpg" alt="Greenbird" width={200} height={200} />
          </div>
        </Link>  
      </div>

      <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex=col lg:h-auto pt-2'>
        <Link href="/graph">
          <h1 className="font-medium text-black hover:text-purple-700 transition-in duration-500 ease-out border-b-2 border-transparent hover:border-purple-700 px-3 mr-6 mb-3 md:mb-0">
            Graphs
          </h1>
        </Link>
      </div>

    </nav>
  )

}

export default memo(header);