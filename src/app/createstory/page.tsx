'use client'
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import PlotComponent, { Annotation } from "../../components/Plot";

function findTvlForDate(targetDate: string, tvlData: TvlsItem[]): number | undefined {
  const targetTimestamp = new Date(targetDate).getTime() / 1000;
  const entry = tvlData.find(item => item.date === targetTimestamp);
  return entry?.totalLiquidityUSD;
}

export default function CreateStoryPage() {
  const [annotations, setAnnotations] = useState<Annotation[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const date = (e.currentTarget.elements.namedItem('date') as HTMLInputElement).value;
    const text = (e.currentTarget.elements.namedItem('text') as HTMLInputElement).value;

    const formatDate = (new Date(date).getTime() / 1000) as any

    console.log({formatDate})
    console.log({text})
    
    const newAnnotation: Annotation = {
      x: '2023-08-16',
      y: 1400000, // You might want to calculate this based on the date or provide an input for the user to specify
      text: 'hello',
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