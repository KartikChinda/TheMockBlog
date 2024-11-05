import React from "react";
import Link from "next/link";
import { Post } from "@/app/interfaces";
const PostCard = ({ post }: { post: Post }) => {
  return (
    <div
      key={post.id}
      className="border rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-[370px] h-[330px] p-8 flex flex-col justify-start items-start bg-bgBeige relative"
    >
      <h2 className="text-xl font-semibold mb-2 font-subtext-heebo uppercase ">
        {post.title}
      </h2>
      <p className="text-gray-700 font-subtext-heebo font-light">
        {post.body.slice(0, 100)}...
      </p>
      <p className="mt-2 font-subtext-heebo">By: {post.author.name}</p>
      <Link
        className="absolute bottom-2 left-6 buttons"
        href={`/posts/${post.id}`}
      >
        {" "}
        Read More
      </Link>
    </div>
  );
};

export default PostCard;
