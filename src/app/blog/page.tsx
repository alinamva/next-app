import PostCard from "@/components/postCard/postCard";
import React from "react";
// export interface Post {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }
// export interface PostProps {
//   post: Post;
// }
// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     next: { revalidate: 3600 },
//   });

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };

const BlogPage = async () => {
  // const posts: Post[] = await getData();

  return (
    <div className="grid grid-cols-3 place-items-center gap-8">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
};

export default BlogPage;
