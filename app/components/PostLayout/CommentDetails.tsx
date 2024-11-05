import React, { useState } from "react";
import { Comments } from "@/app/interfaces";
import useComments from "@/app/hooks/useComments";
import { FaTrash } from "react-icons/fa";

const CommentDetails = ({ comments }: { comments: Comments[] }) => {
  const [commenterName, setCommenterName] = useState("");
  const [newComment, setNewComment] = useState("");
  const { updatedComments, handleAddComment, handleDeleteComment } =
    useComments(comments);

  const addComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddComment(commenterName, newComment);
    setCommenterName("");
    setNewComment("");
  };

  return (
    <>
      <div className="mt-20">
        <form onSubmit={addComment} className="my-4">
          <h4 className="text-lg font-semibold mb-2">Your comment:</h4>
          <input
            type="text"
            value={commenterName}
            onChange={(e) => setCommenterName(e.target.value)}
            placeholder="Your Name"
            className="border border-gray-300 rounded p-2 mb-2 w-full bg-beigeLight"
            required
          />
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Your Comment"
            className="border border-gray-300 rounded p-2 mb-2 w-full bg-beigeLight"
            required
          />
          <button type="submit" className="buttons">
            Submit
          </button>
        </form>

        <div className="text-2xl font-semibold mt-10 mb-6 font-subtext-heebo">
          Here's what others are saying:
        </div>
        <ul className="mb-4">
          {updatedComments.map((comment) => (
            <li
              key={comment.id}
              className="border-b pb-2 mb-2 font-subtext-heebo bg-beigeLight p-2"
            >
              <p className="font-bold">{comment.name}</p>
              <p>{comment.body}</p>
              <button
                onClick={() => handleDeleteComment(comment.id)}
                className="text-red-800 mt-1"
              >
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CommentDetails;
