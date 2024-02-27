'use client'
import React, { useState, useEffect } from 'react';
import PostInterface, { Comment as CommentType } from '../../../interfaces/PostInterface';
import Header from '../../../components/Header';

const PostPage = () => {
  const [post, setPost] = useState<PostInterface>({
    postId: '1',
    title: 'Bitcoin Price Analysis',
    author: '0xPlain',
    comments: [
      { id: 1, text: 'This is a comment' },
      // Add more comments as needed
    ],
  });
  const [newComment, setNewComment] = useState(''); // State to hold the new comment text

  useEffect(() => {
    // Load stored comments from local storage on component mount
    const storedComments = JSON.parse(localStorage.getItem('comments') || '[]');
    setPost(prevPost => ({ ...prevPost, comments: [...prevPost.comments, ...storedComments] }));
  }, []);

  const handleSubmitComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newComment.trim()) return; // Ignore empty comments

    const newCommentObj = { id: Date.now(), text: newComment };

    // Add the new comment to the existing list and update local storage
    setPost(prevPost => {
      const updatedComments = [...prevPost.comments, newCommentObj];
      localStorage.setItem('comments', JSON.stringify(updatedComments));
      return { ...prevPost, comments: updatedComments };
    });

    setNewComment(''); // Reset the input field
  };

  return (
  
    <div>
      <h1 className="text-2xl font-bold text-left ml-4">{post.title}</h1>
      <h2 className="text-sm text-left ml-4 text-gray-600">By {post.author}</h2>
      <div>
        <div className="flex justify-center">
        <img src="/Static1.png" alt="Static Chart" />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold text-center">Comments on the Graph</h2>
        <div className="max-w-md mx-auto mt-4">
        <form onSubmit={handleSubmitComment} className="relative">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Enter your comment"
          required
          className="w-full h-32 p-2 resize-none"
          rows={3}
        ></textarea>
        <button 
          type="submit" 
          className="absolute bottom-2 right-2 bg-blue-500 text-white py-1 px-2 text-xs rounded hover:bg-blue-600 transition-colors"
        >
          Comment
        </button>
    </form>

        {/* List to display comments */}
        <div className="mt-4">
          {post.comments.map(comment => (
            <div key={comment.id} className="bg-gray-100 p-4 mb-2 rounded mx-auto">
              <p className="text-gray-800">{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default PostPage;
