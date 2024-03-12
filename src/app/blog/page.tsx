import { getPosts } from "@/components/lib/data";
import PostCard from "@/components/postCard/postCard";

export interface Post {
  post: {
    userId: number;
    id: string;
    title: string;
    desc: string;
    slug: string;
    img: string;
  };
}

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
  const posts = await getPosts();
  console.log(posts);
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
