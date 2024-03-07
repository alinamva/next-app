import Image from "next/image";
import React from "react";

const SinglePostPage = () => {
  return (
    <div className="flex gap-12">
      <div>
        <Image
          src="/post.jpg"
          alt="post"
          width={300}
          height={700}
        />
      </div>
      <div>
        <h2>Title</h2>
        <div>
          <Image
            src="/noavatar.png"
            alt="noavatar"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
