import React from 'react';
import Image from 'next/image';

const Aboutsection1 = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center max-w-screen-xl mt-20">
        {/* Left Section */}
        <div className="w-full sm:w-1/2 p-5 sm:p-10 flex justify-center sm:justify-center md:justify-start">
          <Image
            src="/about1.webp"
            alt="about image"
            width={600}
            height={600}
            layout="intrinsic" // or 'responsive'
            className="cursor-pointer"
          />
        </div>

        {/* Right Section */}
        <div className="w-full sm:w-1/2 p-5 text-center sm:text-left">
          <div className="text">
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">
              About <span className="text-orange-500">Me</span>
            </h2>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">
              Welcome to{' '}
              <span className="text-blue-500 font-bold text-2xl sm:text-6xl">
              Irfan BlogDev! 
              </span>
            </h2>
            <p className="text-gray-700 text-justify">
              Hi,{' '}
              <span className="text-1xl text-orange-500 font-bold">
                I&quot;m Irfan Ali Babbar!
              </span>{' '}
              I&quot;m thrilled to share my insights into the world of technology and innovation. This platform is dedicated to exploring groundbreaking ideas, advancements, and solutions that are shaping our future.
              <br />
              <br />
              Technology has the power to revolutionize industries, enhance lives, and create opportunities. Through this blog, I aim to spotlight the innovations that inspire, inform, and impact our world.
              <br />
              <br />
              From artificial intelligence to sustainable tech, I believe in the potential of cutting-edge solutions to solve real-world challenges. Join me as we dive into topics that push the boundaries of what&quot;s possible and redefine the future.
              <br />
              <br />
              Let&quot;s Connect! I&quot;d love to hear your thoughts on the latest technological trends. Feel free to reach out through the Contact page or connect with me on [insert social media links]. Together, let&quot;s explore the endless possibilities of innovation.
              <br />
              <br />
              Thank you for being part of this journey. Here&quot;s to creating a brighter, smarter future! 🌟
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutsection1;
