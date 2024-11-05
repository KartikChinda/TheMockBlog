import { useState } from 'react';
import { Comments } from '../interfaces';

const useComments = (initialComments : Comments[]) => {
    console.log("Comments are: ", initialComments)
    const [updatedComments, setUpdatedComments] = useState(initialComments);
    
    const handleAddComment = async (commenterName : string, commentText : string) => {
        if (!commenterName || !commentText) {
            alert("Please fill in both fields.");
            return;
        }

        const newComment = {
            postId: 1, // You would pass the postId as needed
            name: commenterName,
            body: commentText,
            email: "newcommenter@example.com", // Placeholder email
        };

        const response = await fetch(`https://jsonplaceholder.typicode.com/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newComment),
        });

        if (response.ok) {
            const addedComment = await response.json();
            setUpdatedComments((prev) => [addedComment, ...prev]);
        } else {
            alert("Error adding comment");
        }
    };

    const handleDeleteComment = async (commentId : string) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            // Remove the comment from the state
            setUpdatedComments((prev) => prev.filter((comment) => comment.id !== commentId));
        } else {
            alert("Error deleting comment");
        }
    };

    return {
        updatedComments,
        handleAddComment,
        handleDeleteComment,
    };
};

export default useComments;
