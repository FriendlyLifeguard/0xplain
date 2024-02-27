import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react'; // Corrected 'react' to 'React'

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
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl relative group">
          <div className="relative group">
            <div className="absolute -top-4 left-4 z-20">
              <img src="/path/to/profile-image.jpeg" alt="Profile" className="w-12 h-12 rounded-full border-2 border-white" />
            </div>
          </div>
          <div className="p-8 pt-12">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
            <div className="text-sm text-gray-600">Author: {author}</div>
            <div className="mt-4 flex justify-center">
              <img src={imageUrl} alt="Chart" className="w-full h-auto" />
            </div>

            {/* Comment and Share Buttons */}
            <div className="flex items-center mt-4">
              <button className="text-gray-500 mr-4 flex items-center">
                {/* Placeholder for comment icon */}
                <span>&#x1F5E8;</span>
                <span className="ml-1">42</span> {/* Arbitrary comment count */}
              </button>
              <button className="text-gray-500 flex items-center">
                {/* Placeholder for share icon */}
                <span>&#x1F4E4;</span>
              </button>
            </div>
          </div>
        </div>
    </Link>
  );
};

export default ThumbnailComponent;
