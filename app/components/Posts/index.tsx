"use client";
import { Post } from "@/app/interfaces";
import React, { useState, useEffect } from "react";
import { FadeLoader } from "react-spinners";
import PostsList from "./PostsList";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [totalPosts, settotalPosts] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setloading(true);
      setError(null);
      try {
        const response = await fetch(`api/posts?page=${page}&limit=${limit}`);

        if (!response.ok) throw new Error("Failed to fetch posts");

        const { responsePosts, totalPosts } = await response.json();
        console.log("Logging response: ", responsePosts, totalPosts);
        settotalPosts(totalPosts);
        setPosts(responsePosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError("Failed to fetch posts. Please try again.");
      } finally {
        setloading(false);
      }
    };

    fetchPosts();
  }, [page, limit]);

  console.log(posts);

  return (
    <div>
      <h1 className="text-4xl font-bold font-heading-playfair mb-8">
        All Posts
      </h1>
      {loading ? (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
          <FadeLoader color="black" loading={loading} />
        </div>
      ) : error ? (
        <div className="w-screen h-screen font-subtext-heebo font-light flex justify-center items-center">
          {error}
        </div>
      ) : (
        <PostsList />
      )}
      {/* Pagination Controls */}
      <div className="flex justify-between mt-4 items-center">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="pagination-buttons"
        >
          <FaArrowLeft />
        </button>
        <span>Page {page}</span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={posts.length < limit} // Disable if there are fewer posts than limit
          className="pagination-buttons"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Posts;
