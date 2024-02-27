'use client'
import Image from "next/image";
import Link from "next/link"
import Header from "../components/Header"
import ThumbnailComponent from "../components/ThumbnailComponent";
import React, { useState, useEffect } from 'react';

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
    <div className="text-2xl font-bold mt-10 ml-10">
 
</div>


<div className='flex flex-col items-center h-screen mt-20'>
  {/* Container for the three columns */}
  <div className="flex w-full justify-around">
    {/* Column 1 */}
    <div className="flex flex-col items-start ml-10">
      <div className="mt-5">
        <div className="text-2xl font-bold"> &#128640; Trending TVL </div>
      </div>
      <div className="mt-5">
        <div className="flex flex-row items-center">
          <div className="flex flex-col items-start">
            <div className="text-1xl">Starknet</div>
            <span className="text-green-500">↑ 6.8%</span>
          </div>
          <div className="border-b border-r border-t shadow-lg rounded-lg">
            {/* Ensure Image component is correctly imported for your setup */}
            <Image src="/starknetPrice.svg" alt="starknet" width={150} height={150} />
          </div>
        </div>
      </div>
      {/* Repeat for Ethereum and Solana */}
      <div className="mt-5">
        <div className="flex flex-row items-center">
          <div className="flex flex-col items-start">
            <div className="text-1xl">Starknet</div>
            <span className="text-green-500">↑ 6.8%</span>
          </div>
          <div className="border-b border-r border-t shadow-lg rounded-lg">
            {/* Ensure Image component is correctly imported for your setup */}
            <Image src="/starknetPrice.svg" alt="starknet" width={150} height={150} />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex flex-row items-center">
          <div className="flex flex-col items-start">
            <div className="text-1xl">Starknet</div>
            <span className="text-green-500">↑ 6.8%</span>
          </div>
          <div className="border-b border-r border-t shadow-lg rounded-lg">
            {/* Ensure Image component is correctly imported for your setup */}
            <Image src="/starknetPrice.svg" alt="starknet" width={150} height={150} />
          </div>
        </div>
      </div>
    </div>

    {/* Column 2 */}
    {/* Duplicate the structure of Column 1 with different content as needed */}
    <div className="flex flex-col items-start ml-10">
      <div className="mt-5">
        <div className="text-2xl font-bold"> &#128640; Trending TVL </div>
      </div>
      <div className="mt-5">
        <div className="flex flex-row items-center">
          <div className="flex flex-col items-start">
            <div className="text-1xl">Starknet</div>
            <span className="text-green-500">↑ 6.8%</span>
          </div>
          <div className="border-b border-r border-t shadow-lg rounded-lg">
            {/* Ensure Image component is correctly imported for your setup */}
            <Image src="/starknetPrice.svg" alt="starknet" width={150} height={150} />
          </div>
        </div>
      </div>
      {/* Repeat for Ethereum and Solana */}
      <div className="mt-5">
        <div className="flex flex-row items-center">
          <div className="flex flex-col items-start">
            <div className="text-1xl">Starknet</div>
            <span className="text-green-500">↑ 6.8%</span>
          </div>
          <div className="border-b border-r border-t shadow-lg rounded-lg">
            {/* Ensure Image component is correctly imported for your setup */}
            <Image src="/starknetPrice.svg" alt="starknet" width={150} height={150} />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex flex-row items-center">
          <div className="flex flex-col items-start">
            <div className="text-1xl">Starknet</div>
            <span className="text-green-500">↑ 6.8%</span>
          </div>
          <div className="border-b border-r border-t shadow-lg rounded-lg">
            {/* Ensure Image component is correctly imported for your setup */}
            <Image src="/starknetPrice.svg" alt="starknet" width={150} height={150} />
          </div>
        </div>
      </div>
    </div>
    {/* Column 3 */}
    {/* Duplicate the structure of Column 1 with different content as needed */}
    <div className="flex flex-col items-start ml-10">
      <div className="mt-5">
        <div className="text-2xl font-bold"> &#128640; Trending TVL </div>
      </div>
      <div className="mt-5">
        <div className="flex flex-row items-center">
          <div className="flex flex-col items-start">
            <div className="text-1xl">Starknet</div>
            <span className="text-green-500">↑ 6.8%</span>
          </div>
          <div className="border-b border-r border-t shadow-lg rounded-lg">
            {/* Ensure Image component is correctly imported for your setup */}
            <Image src="/starknetPrice.svg" alt="starknet" width={150} height={150} />
          </div>
        </div>
      </div>
      {/* Repeat for Ethereum and Solana */}
      <div className="mt-5">
        <div className="flex flex-row items-center">
          <div className="flex flex-col items-start">
            <div className="text-1xl">Starknet</div>
            <span className="text-green-500">↑ 6.8%</span>
          </div>
          <div className="border-b border-r border-t shadow-lg rounded-lg">
            {/* Ensure Image component is correctly imported for your setup */}
            <Image src="/starknetPrice.svg" alt="starknet" width={150} height={150} />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex flex-row items-center">
          <div className="flex flex-col items-start">
            <div className="text-1xl">Starknet</div>
            <span className="text-green-500">↑ 6.8%</span>
          </div>
          <div className="border-b border-r border-t shadow-lg rounded-lg">
            {/* Ensure Image component is correctly imported for your setup */}
            <Image src="/starknetPrice.svg" alt="starknet" width={150} height={150} />
          </div>
        </div>
      </div>
    </div>

    {/* Column 4 */}
    <div className="flex flex-col items-start ml-10">
      <div className="mt-5">
        <div className="text-2xl font-bold"> &#128640; Trending TVL </div>
      </div>
      <div className="mt-5">
        <div className="flex flex-row items-center">
          <div className="flex flex-col items-start">
            <div className="text-1xl">Starknet</div>
            <span className="text-green-500">↑ 6.8%</span>
          </div>
          <div className="border-b border-r border-t shadow-lg rounded-lg">
            {/* Ensure Image component is correctly imported for your setup */}
            <Image src="/starknetPrice.svg" alt="starknet" width={150} height={150} />
          </div>
        </div>
      </div>
      {/* Repeat for Ethereum and Solana */}
      <div className="mt-5">
        <div className="flex flex-row items-center">
          <div className="flex flex-col items-start">
            <div className="text-1xl">Starknet</div>
            <span className="text-green-500">↑ 6.8%</span>
          </div>
          <div className="border-b border-r border-t shadow-lg rounded-lg">
            {/* Ensure Image component is correctly imported for your setup */}
            <Image src="/starknetPrice.svg" alt="starknet" width={150} height={150} />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex flex-row items-center">
          <div className="flex flex-col items-start">
            <div className="text-1xl">Starknet</div>
            <span className="text-green-500">↑ 6.8%</span>
          </div>
          <div className="border-b border-r border-t shadow-lg rounded-lg">
            {/* Ensure Image component is correctly imported for your setup */}
            <Image src="/starknetPrice.svg" alt="starknet" width={150} height={150} />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="w-full flex flex-col items-center justify-center mt-10">
    <div className="text-4xl font-bold mb-4">Posts</div>
    {annotationSubmitted && (
    <div className="mb-6"> 
    <Link href={'/posts/${postId}'}>
      <ThumbnailComponent postId="1" title="Nostr TVL" author="0xPlain" />
    </Link>
    </div>
    )}

    <Link href={`posts/2`}>
    <div className="mb-6">
      <div className="block">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">BTC CHART</div>
            <div className="text-sm text-gray-600 ml-auto">Author: 0xPlain </div>
            <div className="mt-4"></div>
              <img src="/Static1.png" alt="Chart" width={600} height={400} style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>
    </div>
    </Link>

    <Link href={'posts/3'}>
    <div className="mb-6"> 
    <div className="block">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Terra USD CHART</div>
            <div className="text-sm text-gray-600 ml-auto">Author: 0xPlain </div>
            <div className="mt-4"></div>
              <img src="/Static2.png" alt="Chart" width={600} height={400} style={{ width: '100%', height: 'auto' }} />
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


