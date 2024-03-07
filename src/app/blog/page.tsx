import PostCard from "@/components/postCard/postCard";
import React from "react";

const BlogPage = () => {
  return (
    <div className="grid grid-cols-3 place-items-center gap-8">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default BlogPage;
