import Image from "next/image";
import Link from "next/link"
import Header from "../../components/Header"

export default function FeedList() {
  return (
    <div>
      <Header/>
    <div className="flex flex-col items-center py-8">
      <h2 className="text-2xl font-bold mb-4">Feed List</h2>
      <div className="w-full max-w-md">
        {/* Feed Item 1: Current TVL */}
        <Link href="/avnu/tvl">
          <div className="block border-2 p-4 mt-4 hover:border-blue-500">
            <h3 className="text-xl">1. Current TVL</h3>
          </div>
        </Link>

        {/* Feed Item 2: Current Volume */}
        <Link href="/current-volume">
          <div className="block border-2 p-4 mt-4 hover:border-blue-500">
            <h3 className="text-xl">2. Current Volume</h3>
          </div>
        </Link>

        {/* Feed Item 3: Price Trend */}
        <Link href="/price-trend">
          <div className="block border-2 p-4 mt-4 hover:border-blue-500">
            <h3 className="text-xl">3. Price Trend</h3>
          </div>
        </Link>

        {/* Feed Item 4: Unique Users */}
        <Link href="/unique-users">
          <div className="block border-2 p-4 mt-4 hover:border-blue-500">
            <h3 className="text-xl">4. Unique Users</h3>
          </div>
        </Link>
      </div>
    </div>
  </div>
  );
}
