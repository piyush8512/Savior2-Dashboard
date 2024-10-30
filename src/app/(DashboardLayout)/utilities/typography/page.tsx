

'use client';
import React from 'react';  
import Image from 'next/image'; // Next.js Image for optimized loading

const SocialPost: React.FC = () => {
  return (
    <div className="flex mx-auto mt-6 bg-white shadow-lg rounded-lg pr-8 mr-8 h-full">
      {/* Left Section */}
      <div className="w-1/2 p-4 border-r">
        {/* Post Header */}
        <div className='mr-11'>
        <div className="flex items-center">
          <Image
            src="/profile1.jpg" // Make sure you store this image in the public folder
            alt="User"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3">
            <div className="text-sm">
              <span className="font-semibold">Ray Hammond</span>
              <span className="text-gray-500"> is at </span>
              <a href="#" className="text-blue-500">
                N  ew York, United States
              </a>
            </div>
            <div className="text-xs text-gray-400">Thursday, Jun 31, 5:50 PM</div>
          </div>
        </div>
        </div>

        {/* Post Text */}
        <div className="mt-4">
          <p className="text-gray-700">
            Im so glad to share with you guys some photos from my recent trip to New York.
            This city looks amazing, the buildings, nature, people all are beautiful. I highly recommend
            visiting this cool place! Also, I would like to know what is your favorite place here or what
            you would like to visit? 😍
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 p-4">
        {/* Post Images */}
        <div className="flex space-x-4 gap-2 mb-4">
          <Image
            src="/first.png"
            alt="New York 1"
            width={300}
            height={200}
            className="w-1/2 rounded-lg object-cover"
          />
          <Image
            src="/first.png"
            alt="New York 2"
            width={300}
            height={200}
            className="w-1/2 rounded-lg object-cover"
          />
        </div>

        {/* Reactions */}
        <div className="flex justify-between items-center py-2 border-t mt-2">
          <div className="flex items-center space-x-2">
            {/* User icons */}
            <div className="flex -space-x-1">
              <Image
                src=""
                alt="User 1"
                width={24}
                height={24}
                className="w-6 h-6 rounded-full border-2 border-white"
              />
              <Image
                src=""
                alt="User 2"
                width={24}
                height={24}
                className="w-6 h-6 rounded-full border-2 border-white"
              />
              <Image
                src=""
                alt="User 3"
                width={24}
                height={24}
                className="w-6 h-6 rounded-full border-2 border-white"
              />
            </div>
            <span className="text-gray-500 text-sm">+ 245 Likes</span>
          </div>
          <div className="text-gray-500 text-sm">8 Comments • 0 Shares</div>
        </div>

        {/* Interaction Buttons */}
        <div className="flex justify-around text-gray-500 border-t">
          <button className="flex items-center space-x-1 p-2 hover:text-blue-500">
            👍 <span>Like</span>
          </button>
          <button className="flex items-center space-x-1 p-2 hover:text-blue-500">
            💬 <span>Comment</span>
          </button>
          <button className="flex items-center space-x-1 p-2 hover:text-blue-500">
            ↪️ <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialPost;
