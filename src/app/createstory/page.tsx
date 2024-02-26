'use client'
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import PlotComponent, { Annotation } from "../../components/Plot";


type Comment = {
  id: number;
  text: string;
};

export default function CreateStoryPage() {
  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const date = (e.currentTarget.elements.namedItem('date') as HTMLInputElement).value;
    const text = (e.currentTarget.elements.namedItem('text') as HTMLInputElement).value;
    
    const newAnnotation: Annotation = {
      x: date,
      y: 0, // You might want to calculate this based on the date or provide an input for the user to specify
      text: text,
      showarrow: true,
      arrowhead: 1,
      ax: 0,
      ay: -40,
      bgcolor: 'lightyellow',
      font: { size: 12 },
    };
    setAnnotations(current => [...current, newAnnotation]);
  };
  

  const handleSubmitComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = (e.currentTarget.elements.namedItem('commentText') as HTMLInputElement).value;
    const newComment: Comment = {
      id: comments.length + 1,
      text: text,
    };
    setComments(current => [...current, newComment]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="date" name="date" required />
        <input type="text" name="text" placeholder="Annotation text" required />
        <button type="submit">Add Annotation</button>
      </form>
      <PlotComponent userAnnotations={annotations} />

      {/* Form to add comments */}
      <form onSubmit={handleSubmitComment}>
        <input type="text" name="commentText" placeholder="Enter your comment" required />
        <button type="submit">Add Comment</button>
      </form>


      {/* List to display comments */}
       {/* Render comments */}
       {comments.map(comment => (
        <div key={comment.id}>{comment.text}</div>
      ))}

    </div>
  );
}