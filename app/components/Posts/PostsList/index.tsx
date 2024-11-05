import React from "react";
import { Post } from "@/app/interfaces";
import PostCard from "./PostCard";

const PostsList = ({ posts }: { posts: Post[] }) => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 place-items-center pb-8 p-4">
      {posts.map((post) => (
        <PostCard post={post} />
      ))}
    </div>
  );
};

export default PostsList;
