import { Post } from "@/app/blog/page";
import Image from "next/image";
import Link from "next/link";

const PostCard: React.FC<Post> = ({ post }) => {
  console.log("post:", post);
  console.log(post.slug);

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col gap-4">
        {post.img && (
          <div>
            <Image
              src={post.img}
              alt="post"
              width={300}
              height={500}
            />
          </div>
        )}
        <div className="flex flex-col gap-1">
          <h4>{post.title}</h4>
          <p className="text-gray-300 text-sm font-extralight">{post.desc}</p>
          <Link
            href={`/blog/${post.slug}`}
            className="underline"
          >
            Read more
          </Link>
        </div>
      </div>
      <div className="-rotate-90 max-h-8 ">
        <span>01.01.2001</span>
      </div>
    </div>
  );
};

export default PostCard;
