const getData = async (userId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};
const PostUser = async ({ userId }) => {
  const user = await getData(userId);

  return (
    <div className="flex flex-col justify-between gap-1">
      <span className="text-sm text-gray-400 font-semibold">Author</span>
      <span>{user.name}</span>
    </div>
  );
};

export default PostUser;
