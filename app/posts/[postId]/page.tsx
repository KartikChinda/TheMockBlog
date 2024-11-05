"use client";
import Loader from "@/app/components/Loader";
import { Post } from "@/app/interfaces";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const page = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<Post | null>(null);
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
        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
        setError("Failed to fetch post. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [postId]);

  return (
    <div className="p-8">
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <div className="flex flex-col gap-2">
          <div>{post?.title}</div>
          <div>{post?.body}</div>
        </div>
      )}
    </div>
  );
};

export default page;
