import Link from "next/link"
import {memo} from "react"
import Image from 'next/image'

function header() {
  return(
  <>
    <div className='flex justify-between items-center bg-teal-200 px-4 py-2'>
    <Link href="/">
    <Image src="/logo.png" alt="Logo" width={50} height={50} />
    DataStori
    </Link>
    <div className="text-right">
      <Link href="/createstory">+ add</Link>
    </div>
 </div>
 </>
  )

}

export default memo(header);