import Link from 'next/link';
import Image from 'next/image';


const PostComponent = ({ postId, title, author }) => {
  // Assuming postId is a prop to identify which post to navigate to
  return (
    <Link href={`params.posts/${postId}`}>
      <div className="block">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
            <div className="text-sm text-gray-600 ml-auto">Author: {author}</div>
            {/* Placeholder for the graph or image */}
            <Image src="/starknet1.jpeg" alt="Placeholder" width={600} height={400} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostComponent;
