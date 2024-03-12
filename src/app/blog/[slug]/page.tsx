import { getPost } from "@/components/lib/data";
// import PostUser from "@/components/postUser/postUser";
import Image from "next/image";
import React, { Suspense } from "react";
import { Post } from "../page";

// const getData = async (slug: string) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };
const SinglePostPage: React.FC<Post> = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);

  console.log(post);

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
        <h2>{post.title}</h2>
        <div className="flex gap-4 items-center justify-center">
          <Image
            src="/noavatar.png"
            alt="noavatar"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="flex gap-4">
            {/* <Suspense fallback={<div>...Loading</div>}>
              <PostUser userId={post.id} />
            </Suspense> */}
            <div className=" flex flex-col gap-1">
              <span className="text-sm text-gray-400 font-semibold">
                Published
              </span>
              <span>-11-04T09-30</span>
            </div>
          </div>
        </div>
        <p>{post.desc}</p>
      </div>
    </div>
  );
};

export default SinglePostPage;
