'use client'
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import PlotComponent, { Annotation } from "../../components/Plot";

export default function CreateStoryPage() {
  const [annotations, setAnnotations] = useState<Annotation[]>([]);

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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="date" name="date" required />
        <input type="text" name="text" placeholder="Annotation text" required />
        <button type="submit">Add Annotation</button>
      </form>
      <PlotComponent userAnnotations={annotations} />
    </div>
  );
}