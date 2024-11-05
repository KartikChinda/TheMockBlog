import React from "react";
import Link from "next/link";
import { Post as PostInterface } from "@/app/interfaces";
const PostCard = ({ post }: { post: PostInterface }) => {
  return (
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
  );
};

export default PostCard;
