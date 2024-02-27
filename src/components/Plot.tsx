'use client'
import React, { useEffect, useRef } from 'react';
import * as Plotly from 'plotly.js-dist-min';
import Annotation from '../interfaces/PlotInterface'


interface TvlsItem {
  date: number; // Unix timestamp
  totalLiquidityUSD: number;
}

interface ChainTvls {
  [key: string]: {
    tvl: TvlsItem[];
  };
}

interface ProtocolData {
  id: string;
  name: string;
  url: string;
  description: string;
  logo: string;
  gecko_id: string | null;
  cmcId: string;
  chains: string[];
  twitter: string;
  currentChainTvls: { [key: string]: number };
  chainTvls: ChainTvls;
}


interface PlotComponentProps {
  userAnnotations: Annotation[];
  chartData: any;
  selectedChartLabel: string;
  onPlotClick: (data: any) => void; // Add this line
}

const PlotComponent = ( {userAnnotations = [], chartData, selectedChartLabel, onPlotClick}: PlotComponentProps) => {

  const plotDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    if (!chartData) return;

    async function fetchDataAndPlot() {
      const apiUrl =  chartData.apiUrl;

      try {
        const response = await fetch(apiUrl);
        const jsonData: ProtocolData = await response.json();

        const tvlData = jsonData.chainTvls["Starknet"].tvl;
        const dates = tvlData.map(item => new Date(item.date * 1000).toISOString().split('T')[0]);
        const tvls = tvlData.map(item => item.totalLiquidityUSD);

        const plotData: Plotly.Data[] = [{
          x: dates,
          y: tvls,
          type: 'scatter',
          mode: 'lines',
          fill: 'tozeroy',
          line: {
              color: 'rgb(31, 119, 180)',  // Example: blue line
              width: 2,
          },
          fillcolor: 'rgba(31, 119, 180,0.3)',
      }];

        const annotations = [{
          x: '2023-05-16',
          y: findTvlForDate('2023-05-16', tvlData),
          text: 'Launch date',
          showarrow: true,
          arrowhead: 1,
          ax: 0,
          ay: -40,
          bgcolor: 'lightyellow',
          font: {size: 12},
        },
        {
          x: '2023-12-10',
          y: findTvlForDate('2023-12-10', tvlData),
          text: 'Important news update caused a rally',
          showarrow: true,
          arrowhead: 1,
          ax: 0,
          ay: -40,
          bgcolor: 'lightyellow',
          font: {size: 12},
      },
      ...userAnnotations,
    ];

    const dynamicAnnotations = userAnnotations.map(annotation => ({
      ...annotation,
      y: findTvlForDate(annotation.x, tvlData) || 0, // Fallback to 0 if not found
    }));

      const layout = {
        title: selectedChartLabel,
        xaxis: { title: 'Date' },
        yaxis: { title: 'Total Value Locked (USD)' },
        width: 800,
        height: 600,
        font: {
            family: 'Arial, sans-serif',
            size: 16,
            color: '#7f7f7f'
        },
        plot_bgcolor: "rgba(242, 242, 242, 0.7)",  // Light grey background
        paper_bgcolor: "rgba(242, 242, 242, 0.7)",
        annotations: dynamicAnnotations,
    };

    if (plotDivRef.current) {
      Plotly.newPlot(plotDivRef.current, plotData, layout);
      // Attach the click event listener
      plotDivRef.current?.on('plotly_click', (data: any) => {
        if (onPlotClick) {
          onPlotClick(data);
         } // Call the passed in onPlotClick function with the click event data
      });
    }
      } catch (error) {
        console.error('Error fetching or plotting data:', error);
      }
    }

    fetchDataAndPlot();
  }, [userAnnotations, chartData, selectedChartLabel]);

  function findTvlForDate(targetDate: string, tvlData: TvlsItem[]): number | undefined {
    const targetTimestamp = new Date(targetDate).getTime() / 1000;
    const entry = tvlData.find(item => item.date === targetTimestamp);
    return entry?.totalLiquidityUSD;
  }

  return (
  <div id="myDiv" ref={plotDivRef} />
  
  );
};

export default PlotComponent;