import Image from "next/image";
import { getUser } from "../lib/data";
// const getData = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     { cache: "no-store" }
//   );
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();

// };
const PostUser = async ({ userId }) => {
  const user = await getUser(userId);
  console.log(user);

  return (
    <div className="flex  justify-between gap-4">
      <Image
        src={user.img ? user.img : "/noavatar.png"}
        alt="noavatar"
        width={50}
        height={50}
        className="rounded-full"
      />
      <div className="flex flex-col gap-1">
        <span className="text-sm text-gray-400 font-semibold">Author</span>
        <span>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
