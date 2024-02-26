import Image from "next/image";
import Link from "next/link"
import Header from "../components/Header"
import PostComponent from "../components/PostComponent";

const userAnnotations = [
  {
    x: '2023-01-01',
    y: 100000,
    text: 'Example Annotation',
    showarrow: true,
    arrowhead: 1,
    ax: 0,
    ay: -40,
    bgcolor: 'lightyellow',
    font: { size: 12 },
  },
  // Add more annotations as needed
];

export default function Home() {
  return (
    <>
    <Header/>
    <div className="text-2xl font-bold mt-10 ml-10">
 
</div>

<div className='flex flex-col items-center h-screen mt-20 ml-20'>

  <div className="mt-5 w-full flex flex-row items-center">
    <div className="flex flex-col items-start ml-10">
      <div className="text-2xl font-bold"> &#128640; Trending 
      </div>
    </div>
  </div>
  <div className="mt-5 w-full flex flex-row items-center">
    <div className="flex flex-col items-start ml-10">
      <div className="text-1xl">Starknet</div>
        <span className="text-green-500">↑ 6.8%</span>
    </div>
    <div className="border-b border-r border-t shadow-lg rounded-lg">
      <Image src="/starknetPrice.svg" alt="starknet" width={150} height={150} />
    </div>
  </div>
  <div className="mt-5 w-full flex flex-row items-center">
    <div className="flex flex-col items-start ml-10">
      <div className="text-1xl">Ethereum</div>
        <span className="text-green-500">↑ 5%</span>
    </div>
    <div className="border-b border-r border-t shadow-lg rounded-lg">
      <Image src="/ethereumPrice.svg" alt="ethereum" width={150} height={150} />
    </div>
  </div>
  <div className="mt-5 w-full flex flex-row items-center">
    <div className="flex flex-col items-start ml-10">
        <div className="text-1xl">Solana</div>
          <span className="text-red-500">&darr; 5%</span>
    </div>
    <div className="border-b border-r border-t shadow-lg rounded-lg">
      <Image src="/solanaPrice.svg" alt="solana" width={150} height={150} />
    </div>
  
  </div>
  <div className="w-full flex justify-center mt-10">
      <div className="text-4xl font-bold">Posts</div>
      <PostComponent
        postId="1"
        title="Sample Post Title"
        author="John Doe"
      />
  </div>
  

</div>




    </>
  )
}


