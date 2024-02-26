'use client'
import React, { useState } from 'react';
import PlotComponent, { Annotation } from '../../components/Plot';
import Header from '../../components/Header'; // Import the Header component


type Comment = {
  id: number;
  text: string;
};

type ChartOption = {
  value: string;
  label: string;
};

const CreateStoryPage = () => {
  const [selectedChart, setSelectedChart] = useState<string>('');
  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);

  const handleChartChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedChart(e.target.value);
  };

  const handleSubmitAnnotation = (e: React.FormEvent<HTMLFormElement>) => {
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

  // Define chart options
  const chartOptions: ChartOption[] = [
    { value: '', label: 'Select a chart' },
    { value: 'chart1', label: 'Chart 1' },
    { value: 'chart2', label: 'Chart 2' },
    { value: 'chart3', label: 'Chart 3' },
  ];

    // Empty chart placeholder component
  const EmptyChartPlaceholder = () => {
  const placeholderStyle = {
    width: '100%',
    height: '400px',
    border: '1px dashed #ccc',
    borderRadius: '5px',
  };

  return <div style={placeholderStyle}></div>;
};

  return (

    <div className="container mx-auto p-8">
    {/* Header */}
    <Header />

      <div className="container mx-auto p-8">
        {/* Dropdown Box */}
        <select onChange={handleChartChange} value={selectedChart} className="mb-4">
        {chartOptions.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>

        {/* Blank Canvas */}
        <div className="canvas">
          {selectedChart ? (
              <PlotComponent userAnnotations={annotations} chartData={selectedChart} />
            ) : (
              <EmptyChartPlaceholder />
            )}
        </div>

       {/* Form to add annotations */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Add Annotation</h2>
          <form onSubmit={handleSubmitAnnotation} className="flex items-center">
            <input type="date" name="date" required className="mr-2 p-2 border border-gray-300 rounded" />
            <input type="text" name="text" placeholder="Annotation text" required className="mr-2 p-2 border border-gray-300 rounded" />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Annotation</button>
          </form>
        </div>

      {/* Form to add comments */}
      <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Add Comment</h2>
          <form onSubmit={handleSubmitComment} className="flex items-center">
            <input type="text" name="commentText" placeholder="Enter your comment" required className="mr-2 p-2 border border-gray-300 rounded" />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Comment</button>
          </form>
        </div>

        {/* List to display comments */}
        {/* Render comments */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Comments</h2>
          {comments.map(comment => (
            <div key={comment.id} className="bg-gray-100 p-4 mb-2 rounded">
              <p className="text-gray-800">{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CreateStoryPage;