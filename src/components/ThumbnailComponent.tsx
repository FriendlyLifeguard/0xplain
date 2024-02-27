import Link from 'next/link';
import Image from 'next/image';
import react, { useState, useEffect } from 'react';


const ThumbnailComponent = ({ postId, title, author }) => {
  const [imageUrl, setImageUrl] = useState('/starknet1.jpeg'); // Default image

  useEffect(() => {
    const chartImageData = localStorage.getItem('chartImageData');
    if (chartImageData) {
      setImageUrl(chartImageData);
    }
  }, []);


  return (
    <Link href={`posts/${postId}`}>
      <div className="block">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
            <div className="text-sm text-gray-600 ml-auto">Author: {author}</div>
            <div className="mt-4"></div>
              <img src={imageUrl} alt="Chart" width={600} height={400} style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ThumbnailComponent;
