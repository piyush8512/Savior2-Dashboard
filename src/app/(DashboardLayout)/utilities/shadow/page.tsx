'use client';

import React, { useState } from 'react';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import InputForm from '../../components/forms/theme-elements/InputForm';
import { Container, Typography, Box } from '@mui/material';

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Shadow: React.FC = () => {
  const [chartData, setChartData] = useState<number[]>([0, 0, 0, 0, 0, 0]);

  const updateChartData = (data: number[]) => {
    setChartData(data);
  };

  return (
    <Container maxWidth="lg" sx={{ backgroundColor: 'gray.100', padding: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Solar Panel Prediction
      </Typography>
      <InputForm updateChartData={updateChartData} />
      <Box mt={4} sx={{ maxWidth: '600px', mx: 'auto' }}>
        <Bar
          data={{
            labels: ["Irradiance", "Panel Area", "Efficiency", "Latitude", "Longitude", "Grid Emission Factor"],
            datasets: [{
              label: 'Input Values',
              data: chartData,
              backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 1
            }]
          }}
          options={{
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }}
        />
      </Box>
    </Container>
  );
};

export default Shadow;
