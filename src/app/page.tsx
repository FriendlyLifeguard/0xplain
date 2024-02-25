import Image from "next/image";
import Head from "next/head";
import Link from "next/link"
import Header from "../components/Header";


export default function Home() {
  return (
    <>
      <div className='bg-zinc-50 px-10'>
        <div className='justify-between mx-auto flex min-h-screen max-w-7xl flex-col'>
          <Head>
            <title>Homepage</title>
            <link rel="icon" href="/favicon.ico"/>
          </Head>

          <div>

            <Header/>
          </div>
        </div>
      </div>
    </>
  )
}


