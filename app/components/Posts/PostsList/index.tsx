import React from "react";
import { Post } from "@/app/interfaces";
import Link from "next/link";

const PostsList = ({ posts }: { posts: Post[] }) => {
  console.log(posts);
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 place-items-center pb-8 p-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="border rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-[370px] h-[320px] p-8 flex flex-col justify-start items-start bg-bgBeige relative"
        >
          <h2 className="text-xl font-semibold mb-2 font-subtext-heebo uppercase ">
            {post.title}
          </h2>
          <p className="text-gray-700 font-subtext-heebo font-light">
            {post.body.slice(0, 100)}...
          </p>
          <p className="mt-2 font-subtext-heebo">By: {post.userId}</p>
          <Link
            className="absolute bottom-2 left-6 border-2 border-textBrown hover:bg-textBrown hover:text-beigeLight rounded-xl duration-200 px-4 py-2 text-sm"
            href="/"
          >
            {" "}
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
