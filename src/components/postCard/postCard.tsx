import { PostProps } from "@/app/blog/page";
import Image from "next/image";
import Link from "next/link";

const PostCard: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col gap-4">
        <div>
          <Image
            src="/post.jpg"
            alt="post"
            width={300}
            height={500}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h4>{post.title}</h4>
          <p className="text-gray-300 text-sm font-extralight">{post.body}</p>
          <Link
            href={`/blog/${post.id}`}
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
