import { Post, User } from "./models";
import { connectToDb } from "./utils";

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    console.log(posts);
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug: string | undefined) => {
  try {
    connectToDb();
    const post = await Post.find({ slug });
    console.log(post);
    console.log("got post");
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts!");
  }
};
export const getUser = async (id: number) => {
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts!");
  }
};
export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts!");
  }
};
