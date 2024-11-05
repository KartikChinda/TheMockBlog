"use client";
import Loader from "@/app/components/Loader";
import AuthorDetails from "@/app/components/PostLayout/AuthorDetails";
import PostDetails from "@/app/components/PostLayout/PostDetails";
import CommentDetails from "@/app/components/PostLayout/CommentDetails";
import { Comments, Post, User } from "@/app/interfaces";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";

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
      <div className="mb-10">
        <Link href={"/"}>
          <FaArrowLeft className=" inline" /> Back
        </Link>
      </div>
      {post && <PostDetails post={post} />}
      {author && <AuthorDetails author={author} />}
      {comments && <CommentDetails comments={comments} />}
    </div>
  );
};

export default page;
