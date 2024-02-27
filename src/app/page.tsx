'use client'
import Image from "next/image";
import Link from "next/link"
import Header from "../components/Header"
import ThumbnailComponent from "../components/ThumbnailComponent";
import React, { useState, useEffect } from 'react';
import WalletBar from "../components/Walletbar"
import dynamic from "next/dynamic";

const ConnectModal = dynamic(
  () => import ("../components/WalletBar"), { ssr: false }
);



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

  const [annotationSubmitted, setAnnotationSubmitted] = useState(false);

  useEffect(() => {
    // Check local storage for submission status
    const submissionStatus = localStorage.getItem('annotationSubmitted');
    if (submissionStatus) {
      const { submitted } = JSON.parse(submissionStatus);
      setAnnotationSubmitted(submitted);
    }
  }, []);


  return (
    <>
    <Header/>
    <div className="flex justify-end px-8 ">
    <WalletBar/>
    </div> 
    <div className="text-2xl font-bold mt-10 ml-10">
 
</div>


<div className='flex flex-col items-center h-screen mt-20'>
  {/* Container for the three columns, ensuring they are in a single row */}
  <div className="flex w-full justify-around">
    {/* Column 1 */}
    <div className="flex flex-col items-start ml-10">
      <div className="mt-5">
        <div className="text-2xl font-bold"> &#128640; Trending TVL </div>
      </div>
      {/* Adjusted Flexbox Container for Starknet */}
      <div className="mt-5 flex flex-row items-center justify-start">
        <div className="w-32"> {/* Fixed width for text container */}
          <div className="text-1xl">Starknet</div>
          <span className="text-green-500">↑ 6.8%</span>
        </div>
        <div className="border-b border-r border-t shadow-lg rounded-lg flex-shrink-0">
          <Image src="/starknetPrice.svg" alt="starknet" width={150} height={150} />
        </div>
      </div>
      {/* Adjusted Flexbox Container for Ethereum */}
      <div className="mt-5 flex flex-row items-center justify-start">
        <div className="w-32">
          <div className="text-1xl">Ethereum</div>
          <span className="text-green-500">↑ 5%</span>
        </div>
        <div className="border-b border-r border-t shadow-lg rounded-lg flex-shrink-0">
          <Image src="/ethereumPrice.svg" alt="ethereum" width={150} height={150} />
        </div>
      </div>
      {/* Adjusted Flexbox Container for Solana */}
      <div className="mt-5 flex flex-row items-center justify-start">
        <div className="w-32">
          <div className="text-1xl">Solana</div>
          <span className="text-red-500">↓ 2.3%</span>
        </div>
        <div className="border-b border-r border-t shadow-lg rounded-lg flex-shrink-0">
          <Image src="/solanaPrice.svg" alt="solana" width={150} height={150} />
        </div>
      </div>
    </div>

    {/* Column 2 */}
    <div className="flex flex-col items-start ml-10">
      <div className="mt-5">
        <div className="text-2xl font-bold"> &#128640; Daily Volume </div>
      </div>
      {/* Adjusted Flexbox Container for Starknet */}
      <div className="mt-5 flex flex-row items-center justify-start">
        <div className="w-32"> {/* Fixed width for text container */}
          <div className="text-1xl">Starknet</div>
          <span className="text-green-500">↑ 6.8%</span>
        </div>
        <div className="border-b border-r border-t shadow-lg rounded-lg flex-shrink-0">
          <Image src="/starknetPrice.svg" alt="starknet" width={150} height={150} />
        </div>
      </div>
      {/* Adjusted Flexbox Container for Ethereum */}
      <div className="mt-5 flex flex-row items-center justify-start">
        <div className="w-32">
          <div className="text-1xl">Ethereum</div>
          <span className="text-green-500">↑ 5%</span>
        </div>
        <div className="border-b border-r border-t shadow-lg rounded-lg flex-shrink-0">
          <Image src="/ethereumPrice.svg" alt="ethereum" width={150} height={150} />
        </div>
      </div>
      {/* Adjusted Flexbox Container for Solana */}
      <div className="mt-5 flex flex-row items-center justify-start">
        <div className="w-32">
          <div className="text-1xl">Solana</div>
          <span className="text-red-500">↓ 2.3%</span>
        </div>
        <div className="border-b border-r border-t shadow-lg rounded-lg flex-shrink-0">
          <Image src="/solanaPrice.svg" alt="solana" width={150} height={150} />
        </div>
      </div>
    </div>

    {/* Column 3 */}
    <div className="flex flex-col items-start ml-10">
      <div className="mt-5">
        <div className="text-2xl font-bold"> &#128640; Top Volume </div>
      </div>
      {/* Adjusted Flexbox Container for Starknet */}
      <div className="mt-5 flex flex-row items-center justify-start">
        <div className="w-32"> {/* Fixed width for text container */}
          <div className="text-1xl">Starknet</div>
          <span className="text-green-500">↑ 6.8%</span>
        </div>
        <div className="border-b border-r border-t shadow-lg rounded-lg flex-shrink-0">
          <Image src="/starknetPrice.svg" alt="starknet" width={150} height={150} />
        </div>
      </div>
      {/* Adjusted Flexbox Container for Ethereum */}
      <div className="mt-5 flex flex-row items-center justify-start">
        <div className="w-32">
          <div className="text-1xl">Ethereum</div>
          <span className="text-green-500">↑ 5%</span>
        </div>
        <div className="border-b border-r border-t shadow-lg rounded-lg flex-shrink-0">
          <Image src="/ethereumPrice.svg" alt="ethereum" width={150} height={150} />
        </div>
      </div>
      {/* Adjusted Flexbox Container for Solana */}
      <div className="mt-5 flex flex-row items-center justify-start">
        <div className="w-32">
          <div className="text-1xl">Solana</div>
          <span className="text-red-500">↓ 2.3%</span>
        </div>
        <div className="border-b border-r border-t shadow-lg rounded-lg flex-shrink-0">
          <Image src="/solanaPrice.svg" alt="solana" width={150} height={150} />
        </div>
      </div>
    </div>
  </div>

  <div className="w-full flex flex-col items-center justify-center mt-10">
    <div className="text-4xl font-bold mb-4">Posts</div>
    {annotationSubmitted && (
    <div className="mb-6 relative"> 
    <Link href={'/posts/${postId}'}>
      <ThumbnailComponent postId="1" title="Nostr TVL" author="0xPlain" />
      <button className="absolute top-0 right-0 m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Mint
      </button>
    </Link>
    </div>
    )}

    <Link href={`posts/2`}>
    <div className="mb-6 relative">
      <div className="block">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">BTC CHART</div>
            <div className="text-sm text-gray-600 ml-auto">Author: 0xPlain </div>
            <div className="mt-4"></div>
              <img src="/Static1.png" alt="Chart" width={600} height={400} style={{ width: '100%', height: 'auto' }} />
              <button className="absolute top-0 right-0 m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Mint
              </button>
          </div>
        </div>
      </div>
    </div>
    </Link>

    <Link href={'posts/3'}>
    <div className="mb-6 relative"> 
    <div className="block">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Terra USD CHART</div>
            <div className="text-sm text-gray-600 ml-auto">Author: 0xPlain </div>
            <div className="mt-4"></div>
              <img src="/Static2.png" alt="Chart" width={600} height={400} style={{ width: '100%', height: 'auto' }} />
              <button className="absolute top-0 right-0 m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Mint
              </button>
          </div>
        </div>
      </div>
    </div>
    </Link>
  </div>
  

</div>

    </>
  )
}


