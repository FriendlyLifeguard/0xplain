'use client'
import React, { useState, useEffect } from 'react';
import PostComponent, { Comment as CommentType } from '../../../interfaces/PostInterface';
import Annotation from "../../../interfaces/PlotInterface"
import Header from '../../../components/Header';


const fetchPostData = async (): Promise<PostComponent> => {
  // Simulate fetching data
  return {
    postId: '1',
    title: 'Nostra TVL Chart',
    author: '0xPlain',
    comments: [
      { id: 1, text: 'This is a comment' },
    ],
  };
};



const PostPage = () => {
  const [post, setPost] = useState<PostComponent | null>(null);
  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const [chartImageData, setChartImageData] = useState<string | null>(null);
  const [comments, setComments] = useState<CommentType[]>([]); // Updated to store comments
  const [newComment, setNewComment] = useState(''); // State to hold the new comment text

  

  useEffect(() => {
    fetchPostData().then(setPost);

    const storedImageData = localStorage.getItem('chartImageData');
    if (storedImageData) {
      setChartImageData(storedImageData);
    }
  }, []);

  const handleSubmitComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newComment.trim()) return; // Ignore empty comments

    // Add the new comment to the existing list
    const updatedComments = [...comments, { id: Date.now(), text: newComment }];
    setComments(updatedComments);
    setNewComment(''); // Reset the input field
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <Header/>
      <h1 className="text-2xl font-bold text-left ml-4">{post.title}</h1>
      <div className="flex items-center space-x-2">
      <h2 className="text-sm text-left ml-4 text-gray-600">By {post.author}</h2>
      <button className="text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
        Tip
      </button>
      </div>
      <div className="flex justify-center">
      {chartImageData && (
        <div>
          <img src={chartImageData} alt="annotated chart"/>
        </div>
      )}
      </div>

      {annotations.map((annotation, index) => (
        <div key={index}>
          <p>{annotation.text}</p>
        </div>
      ))}

            {/* Comment Section */}
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
          <button type="submit" className="absolute bottom-2 right-2 bg-blue-500 text-white py-1 px-2 text-xs rounded hover:bg-blue-600 transition-colors">Comment</button>
        </form>

        {/* List to display comments */}
        <div className="mt-4">
          {comments.map(comment => (
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

