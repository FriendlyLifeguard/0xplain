import { useRouter } from 'next/router';

const PostDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Fetch post data based on postId or implement getStaticProps/getServerSideProps
  
  return (
    <div className="flex flex-col items-center py-8">
    <h1 className="text-4xl font-bold mb-20">Starknet Current TVL</h1>

    <img src="/starknet1.jpeg" alt="Starknet Image" className="w-1/2 mb-4" />
    

    {/* Discussions Subsection */}
    <div className="w-full max-w-2xl">
      <h2 className="text-3xl font-semibold mb-2">Discuss</h2>

         
      {/* Example Comment 1 with Replies */}
      <div className="border-2 p-4 mb-4">
        <p className="font-semibold">User1 <span className="text-sm text-gray-500">- 2 hours ago</span></p>
        <p>Interesting insights on Starknet's TVL trends.</p>
        {/* Replies */}
        <div className="pl-4 mt-2 text-sm">
          <p><span className="font-semibold">User3:</span> Absolutely, it's quite fascinating. <span className="text-gray-500">- 1 hour ago</span></p>
          <p><span className="font-semibold">User4:</span> Agreed! Been following closely. <span className="text-gray-500">- 45 mins ago</span></p>
        </div>
      </div>

      {/* Example Comment 2 with Replies */}
      <div className="border-2 p-4 mb-4">
        <p className="font-semibold">User2 <span className="text-sm text-gray-500">- 3 hours ago</span></p>
        <p>Does anyone think the TVL will continue to rise?</p>
        {/* Replies */}
        <div className="pl-4 mt-2 text-sm">
          <p><span className="font-semibold">User5:</span> I think there's potential for more growth. <span className="text-gray-500">- 2 hours ago</span></p>
          <p><span className="font-semibold">User6:</span> It's hard to say with the current market. <span className="text-gray-500">- 1 hour ago</span></p>
        </div>
      </div>


    </div>
  </div>
  );
};

export default PostDetailPage;
