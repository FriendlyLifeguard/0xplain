'use client'
import React, { useEffect } from 'react';
import * as Plotly from 'plotly.js-dist-min';


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

export interface Annotation {
  x: string;
  y: number;
  text: string;
  showarrow: boolean;
  arrowhead: number;
  ax: number;
  ay: number;
  bgcolor: string;
  font: { size: number };
}

interface PlotComponentProps {
  userAnnotations: Annotation[];
}

const PlotComponent = ( {userAnnotations = []}: PlotComponentProps) => {
  useEffect(() => {
    async function fetchDataAndPlot() {
      const apiUrl = 'https://api.llama.fi/protocol/nostra';

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

      const layout = {
        title: 'TVL Over Time: Nostra',
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
        annotations: annotations,
    };

        Plotly.newPlot('myDiv', plotData, layout);
      } catch (error) {
        console.error('Error fetching or plotting data:', error);
      }
    }

    fetchDataAndPlot();
  }, [userAnnotations]);

  function findTvlForDate(targetDate: string, tvlData: TvlsItem[]): number | undefined {
    const targetTimestamp = new Date(targetDate).getTime() / 1000;
    const entry = tvlData.find(item => item.date === targetTimestamp);
    return entry?.totalLiquidityUSD;
  }

  return <div id="myDiv" />;
};

export default PlotComponent;