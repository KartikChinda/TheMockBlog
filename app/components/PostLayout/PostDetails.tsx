import { Post } from "@/app/interfaces";
import React from "react";

const PostDetails = ({ post }: { post: Post }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-3xl font-bold font-heading-playfair mb-4 uppercase">
        {post.title}
      </div>
      <div className=" font-subtext-heebo text-gray-950">{post.body}</div>
    </div>
  );
};

export default PostDetails;
