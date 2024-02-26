
export default function Home() {
  return(

<div className="flex flex-col items-center py-8">
  <h2 className="text-2xl font-bold mb-4">Feed Page</h2>
  <div className="w-full max-w-md">

    <div className="flex justify-between items-center border-b-2 py-2">
      <div>
        <h3 className="text-xl">Feed Item 1</h3>
        <p className="text-gray-600">Description for feed item 1...</p>
      </div>
      <button className="flex items-center" onClick="incrementVote(1)">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
        <span id="voteCount1">0</span>
      </button>
    </div>

    <div className="flex justify-between items-center border-b-2 py-2">
      <div>
        <h3 className="text-xl">Feed Item 2</h3>
        <p className="text-gray-600">Description for feed item 2...</p>
      </div>
      <button className="flex items-center" onClick="incrementVote(2)">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
        <span id="voteCount2">0</span>
      </button>
    </div>

  </div>
</div>

  )
  }
