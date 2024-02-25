'use client'
import { useState } from 'react';

interface MyPageProps {}

const MyPage: React.FC<MyPageProps> = () => {
  const [title, setTitle] = useState('');
  const [datePosition, setDatePosition] = useState('');
  const [annotation, setAnnotation] = useState('');

  const handleDatePositionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDatePosition(event.target.value);
  };

  const handleAnnotationChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnnotation(event.target.value);
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex flex-col">
      <input
        className="px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <div className="mt-4">
        <label htmlFor="date-position" className="block text-sm font-medium text-gray-700">
          Date and Position
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="date-position"
            id="date-position"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="Enter date and position"
            value={datePosition}
            onChange={handleDatePositionChange}
          />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="annotation" className="block text-sm font-medium text-gray-700">
          Annotation
        </label>
      </div>
    </div>
  )
}
