'use client'
import React, { useState } from 'react';
import PlotComponent from '../../components/Plot';
import Header from '../../components/Header';
import Annotation from '../../interfaces/PlotInterface';
import * as Plotly from 'plotly.js-dist-min'; // Make sure to import Plotly
import {useRouter} from "next/navigation"

type ChartOption = {
  value: string;
  label: string;
  data: any; // Data or configuration for the chart
};

const CreateStoryPage = () => {
  const [selectedChart, setSelectedChart] = useState<string>('');
  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const [selectedChartLabel, setSelectedChartLabel] = useState<string>('');

  const router = useRouter();

  const handleChartChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedChart(e.target.value);

    setAnnotations([]); // Clear annotations when chart changes
    setSelectedChartLabel(e.target.options[e.target.selectedIndex].text); // Set the selected chart label

  };

  const handleSubmitAnnotation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const date = (e.currentTarget.elements.namedItem('date') as HTMLInputElement).value;
    const text = (e.currentTarget.elements.namedItem('text') as HTMLInputElement).value;

    const newAnnotation: Annotation = {
      x: date,
      y: 0, // This can be dynamically calculated based on your needs
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

  const handleExport = () => {
    const plotElement = document.getElementById('myDiv');
    if (plotElement) {
      Plotly.toImage(plotElement, { format: 'png' })
        .then((dataUrl) => {

          localStorage.setItem('chartImageData', dataUrl);
          localStorage.setItem('annotationSubmitted', JSON.stringify({ submitted: true }));

          router.push('/'); 
        })
        .catch(function(error) {
          console.error('Error generating the plot image:', error);
        });
    }
  };

  // Define chart options
  const chartOptions: ChartOption[] = [
    { value: '', label: 'Select a chart', data: null },
    { value: 'chart1', label: 'Nostra TVL', data: { apiUrl: 'https://api.llama.fi/protocol/nostra' } },
    { value: 'chart2', label: 'ZKLend TVL', data: { apiUrl: 'https://api.llama.fi/protocol/zklend' } },
    { value: 'chart3', label: 'Ekubo TVL', data: { apiUrl: 'https://api.llama.fi/protocol/ekubo' } },
  ];

  return (
    <div className="container mx-auto p-8">
      <Header />

      <div className="container mx-auto p-8">
        <select onChange={handleChartChange} value={selectedChart} className="mb-4">
          {chartOptions.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>

        <div className="canvas">
          {selectedChart ? (
            <PlotComponent userAnnotations={annotations} chartData={chartOptions.find(option => option.value === selectedChart)?.data} selectedChartLabel={selectedChartLabel}/>
            ) : (
            <div style={{ width: '100%', height: '400px', border: '1px dashed #ccc', borderRadius: '5px' }}></div>
          )}
        </div>

        <div className="mb-4">
          <form onSubmit={handleSubmitAnnotation} className="flex items-center">
            <input type="date" name="date" required className="mr-2 p-2 border border-gray-300 rounded" />
            <input type="text" name="text" placeholder="Annotation text" required className="mr-2 p-2 border border-gray-300 rounded" />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Annotation</button>
          </form>
        </div>
        <button onClick={handleExport} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Submit</button>
      </div>
    </div>
  );
}

export default CreateStoryPage;
