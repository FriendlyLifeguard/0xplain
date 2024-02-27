'use client'
import React, { useState, useEffect } from 'react';
import PostComponent, { Comment as CommentType } from '../../../interfaces/PostInterface';
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
      <h1>{post.title}</h1>
      <h2>By {post.author}</h2>
      <div>
        <h3>Comments:</h3>
        {post.comments.map((comment: CommentType) => (
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

            {/* Comment Section */}
            <div className="mt-4">
        <h2 className="text-lg font-semibold">Comments on the Graph</h2>
        {/* Form to add new comments */}
        <form onSubmit={handleSubmitComment} className="max-w-md ">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Enter your comment"
            required
            className="w-full h-32 p-2 border border-gray-300 rounded"
            rows={3}
          ></textarea>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 mt-2 rounded hover:bg-blue-600">Comment</button>
        </form>

        {/* List to display comments */}
        <div>
          {comments.map(comment => (
            <div key={comment.id} className="bg-gray-100 p-4 mb-2 rounded">
              <p className="text-gray-800">{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
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