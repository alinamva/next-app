import Image from "next/image";
import React from "react";

const SinglePostPage = () => {
  return (
    <div className="flex gap-12">
      <div className="hidden md:flex">
        <Image
          src="/post.jpg"
          alt="post"
          width={300}
          height={700}
        />
      </div>
      <div className="flex flex-col gap-3 items-start">
        <h2>Title</h2>
        <div className="flex gap-4 items-center justify-center">
          <Image
            src="/noavatar.png"
            alt="noavatar"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="flex gap-4">
            <div className="flex flex-col justify-between gap-1">
              <span className="text-sm text-gray-400 font-semibold">
                Author
              </span>
              <span>Terry Jefferson</span>
            </div>
            <div className=" flex flex-col gap-1">
              <span className="text-sm text-gray-400 font-semibold">
                Published
              </span>
              <span>-11-04T09-30</span>
            </div>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
          consectetur est, mollitia illum nobis odit, tempora reprehenderit,
          iure nulla doloribus nihil quis enim blanditiis error temporibus
          laudantium rem dolor quas?
        </p>
      </div>
    </div>
  );
};

export default SinglePostPage;
