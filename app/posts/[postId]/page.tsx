"use client";
import Loader from "@/app/components/Loader";
import { Comments, Post, User } from "@/app/interfaces";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const page = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [author, setAuthor] = useState<User | null>(null);
  const [comments, setComments] = useState<Comments[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!postId) return;
      try {
        const response = await fetch(`/api/posts/${postId}`);
        if (!response.ok) {
          throw new Error("Error fetching post");
        }
        const data = await response.json();
        setPost(data.post);
        setAuthor(data.author);
        setComments(data.comments);
      } catch (error) {
        console.error("Error fetching post:", error);
        setError("Failed to fetch post. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [postId]);

  if (loading)
    return (
      <div className="p-8 overflow-hidden">
        <Loader loading={loading} />
      </div>
    );
  return (
    <div className="p-8 overflow-hidden">
      {post && (
        <div className="flex flex-col gap-2">
          <div className="text-3xl font-bold font-heading-playfair mb-4 uppercase">
            {post.title}
          </div>
          <div className=" font-subtext-heebo text-gray-950">{post.body}</div>
        </div>
      )}
      {author && (
        <div className="mt-10">
          This post was written by:
          <p className="text-textBrown font-extrabold text-xl font-subtext-heebo">
            {author.name}
          </p>
          <div className="font-subtext-heebo font-light flex flex-col text-sm mt-2">
            <div>
              Reach out to them here:{" "}
              <span className="font-bold text-lg">{author.email}</span>
            </div>
            <div>
              Website:{" "}
              <Link
                href={`${author.website}`}
                target="__blank"
                className="font-bold text-lg"
              >
                {author.website}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
