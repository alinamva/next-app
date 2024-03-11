import { Post, User } from "./models";
import { connectToDb } from "./utils";
const getData = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts!");
  }
};

const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.find({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts!");
  }
};
const getUser = async (id) => {
  try {
    connectToDb();
    const user = await User.find(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts!");
  }
};
const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts!");
  }
};
