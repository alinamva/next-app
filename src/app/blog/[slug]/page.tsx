import { getPost } from "@/components/lib/data";
import Image from "next/image";
import React, { Suspense } from "react";
import PostUser from "@/components/postUser/postUser";

const getData = async (slug: string) => {
  const res = await fetch(`http://localhost:300/api/blog/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

// export const generateMetaData = async ({ params }) => {
//   const { slug } = params;
//   const posts = await getPost(slug);
//   const post = posts[0];
//   return {
//     title: post.title,
//     desc: post.desc,
//   };
// };
interface PageParams {
  slug: string;
}
const SinglePostPage = async ({ params }: { params: PageParams }) => {
  const { slug } = params;

  const posts = await getPost(slug);
  // const posts = await getPost(slug);
  const post = posts[0];

  return (
    <div className="flex gap-12">
      <div className="hidden md:flex">
        {post.img && (
          <Image
            src={post.img}
            alt="post"
            width={300}
            height={700}
          />
        )}
      </div>
      <div className="flex flex-col gap-3 items-start">
        <h2>{post.title}</h2>
        <div className="flex gap-4 items-center justify-center">
          {/* <Image
            src={"/noavatar.png"}
            alt="noavatar"
            width={50}
            height={50}
            className="rounded-full"
          /> */}
          <div className="flex gap-4">
            {post && (
              <Suspense fallback={<div>...Loading</div>}>
                <PostUser userId={post.userId} />
              </Suspense>
            )}
            <div className=" flex flex-col gap-1">
              <span className="text-sm text-gray-400 font-semibold">
                Published
              </span>
              <span>{post.createdAt.toString().slice(4, 16)}</span>
            </div>
          </div>
        </div>
        <p>{post.desc}</p>
      </div>
    </div>
  );
};

export default SinglePostPage;
