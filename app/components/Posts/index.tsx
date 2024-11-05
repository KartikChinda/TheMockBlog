"use client";
import { Post, User } from "@/app/interfaces";
import React, { useState, useEffect } from "react";
import PostsList from "./PostsList";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Loader from "../Loader";

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [totalPosts, settotalPosts] = useState<number>(0);
  const [selectedUserName, setSelectedUserName] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setloading(true);
      setError(null);
      try {
        const userId = selectedUserName
          ? users.find((user) => user.name === selectedUserName)?.id
          : null;
        const response = await fetch(
          `api/posts?page=${page}&limit=${limit}${
            userId ? `&userId=${userId}` : ""
          }`
        );

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
  }, [page, users, limit, selectedUserName]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleUserChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUserName(e.target.value);
    setPage(1);
  };

  return (
    <div className="mt-4 ">
      <h1 className="text-4xl font-bold font-heading-playfair mb-2">
        All Posts
      </h1>
      <hr className="w-[60%] border-textBrown" />
      <label htmlFor="userSelect" className="block mb-2 mt-10">
        Filter by User:
      </label>
      <select
        id="userSelect"
        value={selectedUserName}
        onChange={handleUserChange}
        className=" p-2 rounded-xl border  mb-20"
      >
        <option value="">All Users</option>
        {users.map((user) => (
          <option key={user.id} value={user.name}>
            {user.name}
          </option>
        ))}
      </select>
      {loading ? (
        <Loader loading={loading} />
      ) : error ? (
        <div className="w-screen h-screen font-subtext-heebo font-light flex justify-center items-center">
          {error}
        </div>
      ) : (
        posts && posts.length > 0 && <PostsList posts={posts} />
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
        <span className="font-bold font-subtext-heebo uppercase">
          Page {page}
        </span>
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
