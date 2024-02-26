import Image from "next/image";
import Link from "next/link"
import Header from "../components/Header"


export default function Home() {
  return (
    <>
    <Header/>
        <div className="text-6xl ">
            Trending
        </div>
       
      <div className='flex flex-col items-center h-screen'>
  <div className="flex flex-row items-center mt-20 border-2 p-1 w-full justify-between">
    <div className="flex flex-col items-start">
      <div className="text-3xl">
      <Link href="/starknet">
        Starknet
      </Link>
      </div>
      <div className="text-1xl">
        TVL
      </div>
    </div>
    <div>
      <Image src="/starknetPrice.svg" alt="starknet" width={300} height={300} />
    </div>
  </div>
  <div className="flex flex-row items-center mt-20 border-2 p-1 w-full justify-between">
    <div className="flex flex-col items-start">
      <div className="text-3xl">
        <Link href="/ethereum">
        Ethereum
        </Link>
      </div>
      <div className="text-1xl">
        TVL
      </div>
    </div>
    <div>
      <Image src="/ethereumPrice.svg" alt="ethereum" width={300} height={300} />
    </div>
  </div>
  <div className="flex flex-row items-center mt-20 border-2 p-1 w-full justify-between"> 
    <div className="flex flex-col items-start">
      <div className="text-3xl">
        <Link href="/solana">
        Solana
        </Link>
      </div>
      <div className="text-1xl">
        TVL
      </div>
    </div>
    <div>
      <Image src="/solanaPrice.svg" alt="solana" width={300} height={300} />
    </div>
  </div>
</div>

    </>
  )
}


