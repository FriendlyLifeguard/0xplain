import Image from "next/image";
import Link from "next/link"
import Header from "../../components/Header"

export default function Home() {
  return (
<div>
    <Header/>
    <div className="flex flex-col items-center py-8">
  <h2 className="text-2xl font-bold mb-4">Feed Page</h2>
  <div className="w-full max-w-md">

    <div className="border-2 p-4 mt-4 block hover:bg-gray-100">
      <Link href="/avnu">
      <h3 className="text-xl font-semibold">Avnu</h3>
      <p className="text-gray-600">Description or content for Avnu...</p>
      </Link>
    </div>
    

    <div className="border-2 p-4 mt-4 block hover:bg-gray-100">
      <Link href="/nostra">
      <h3 className="text-xl font-semibold">Nostra</h3>
      <p className="text-gray-600">Description or content for Nostra...</p>
      </Link>
    </div>
    

    <div className="border-2 p-4 mt-4 block hover:bg-gray-100">
      <Link href="/zklend">
      <h3 className="text-xl font-semibold">ZkLend</h3>
      <p className="text-gray-600">Description or content for ZkLend...</p>
      </Link>
    </div>
  </div>
</div>
</div>

  )
  }