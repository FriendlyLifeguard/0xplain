import Image from "next/image";
import Link from "next/link"



export default function Home() {
  return (
    <>
      <div className='flex justify-between items-center bg-teal-200 px-4 py-2'>
          <Link href="/">
          <Image src="/monkeylogo.png" alt="Logo" width={50} height={50} />
          DataStori
          </Link>
          <div className="text-right">
            <Link href="/graph">+ add</Link>
          </div>
       </div>

       <div className='flex justify-between items-center'>
            Trending
      </div>
    </>
  )
}


