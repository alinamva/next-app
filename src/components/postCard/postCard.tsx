import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
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
          <h4>Title</h4>
          <p className="text-gray-300 text-sm font-extralight">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
            debitis autem ad nemo doloremque nisi fugit aliquam cupiditate saepe
            molestias consequuntur iure facere modi qui, ipsum tempora veniam
            dolorem expedita.
          </p>
          <Link
            href="/blog/posts"
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
