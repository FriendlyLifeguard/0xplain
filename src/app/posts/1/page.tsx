'use client'
import React, { useState, useEffect } from 'react';
import PostComponent, { Comment } from '../../../interfaces/PostInterface';
import Annotation from "../../../interfaces/PlotInterface"
// Dummy data fetching function
const fetchPostData = async (): Promise<PostComponent> => {
  // Simulate fetching data
  return {
    postId: '1',
    title: 'Dynamic Post Title',
    author: 'Author Name',
    comments: [
      { id: 1, text: 'This is a comment' },
      // Add more comments as needed
    ],
  };
};



const PostPage = () => {
  const [post, setPost] = useState<PostComponent | null>(null);
  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const [chartImageData, setChartImageData] = useState<string | null>(null);

  

  useEffect(() => {
    fetchPostData().then(setPost);

    const storedImageData = localStorage.getItem('chartImageData');
    if (storedImageData) {
      setChartImageData(storedImageData);
    }
  }, []);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <h2>By {post.author}</h2>
      <div>
        <h3>Comments:</h3>
        {post.comments.map((comment: Comment) => (
          <div key={comment.id}>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>

      {chartImageData && (
        <div>
          <h3>Chart:</h3>
          <img src={chartImageData} alt="annotated chart"/>
        </div>
      )}

      {annotations.map((annotation, index) => (
        <div key={index}>
          <p>{annotation.text}</p>
        </div>
      ))}
    </div>
  );
};

export default PostPage;


      // {/* Form to add comments */}
      // <div className="mb-4">
      //     <h2 className="text-lg font-semibold mb-2">Add Comment</h2>
      //     <form onSubmit={handleSubmitComment} className="flex items-center">
      //       <input type="text" name="commentText" placeholder="Enter your comment" required className="mr-2 p-2 border border-gray-300 rounded" />
      //       <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Comment</button>
      //     </form>
      //   </div>

      //   {/* List to display comments */}
      //   {/* Render comments */}
      //   <div>
      //     <h2 className="text-lg font-semibold mb-2">Comments</h2>
      //     {comments.map(comment => (
      //       <div key={comment.id} className="bg-gray-100 p-4 mb-2 rounded">
      //         <p className="text-gray-800">{comment.text}</p>
      //       </div>
      //     ))}
      //   </div>
      // </div>

      // const [comments, setComments] = useState<Comment[]>([]);

      // const handleSubmitComment = (e: React.FormEvent<HTMLFormElement>) => {
      //   e.preventDefault();
      //   const text = (e.currentTarget.elements.namedItem('commentText') as HTMLInputElement).value;
      // };