"use client";

import { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Chart, ChartItem, ScatterController, LineElement, PointElement, LinearScale, Title } from 'chart.js';
import regression from 'regression';

// Register necessary components for Chart.js
Chart.register(ScatterController, LineElement, PointElement, LinearScale, Title);

const PlantStockMarketTrendPredictor = () => {
    const [selectedCase, setSelectedCase] = useState<'A' | 'B' | 'C' | 'D' | 'E'>('A');
    const [revenue, setRevenue] = useState('');
    const [cost, setCost] = useState('');
    const [productionVolume, setProductionVolume] = useState('');
    const [decision, setDecision] = useState('');

    const cases = {
        A: generateSyntheticData(10, 2, 1),
        B: generateSyntheticData(10, 1.5, 5),
        C: generateSyntheticData(10, 1, 10),
        D: generateSyntheticData(10, 2.5, 15),
        E: generateSyntheticData(10, 0.5, 20)
    };

    const chartData = {
        labels: [],
        datasets: [] as any[]
    };

    useEffect(() => {
        const ctx = document.getElementById('regressionChart') as ChartItem | null;
        if (ctx) {
            const regressionChart = new Chart(ctx, {
                type: 'scatter',
                data: chartData,
                options: {
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Production Volume',
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Revenue',
                            }
                        }
                    }
                }
            });

            Object.keys(cases).forEach(caseKey => {
                const caseData = cases[caseKey as keyof typeof cases];
                addDataSet(caseData, caseKey);
            });

            return () => {
                regressionChart.destroy();
            };
        }
    }, []);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const revenueNum = parseFloat(revenue);
        const costNum = parseFloat(cost);
        const productionVolumeNum = parseFloat(productionVolume);

        addDataPoint(selectedCase, productionVolumeNum, revenueNum);
        const decisionResult = makeDecision(revenueNum, costNum);
        setDecision(decisionResult);

        setRevenue('');
        setCost('');
        setProductionVolume('');
    };

    function generateSyntheticData(numPoints: number, slope: number, intercept: number) {
        const data: [number, number][] = [];
        for (let i = 1; i <= numPoints; i++) {
            const productionVolume = i * 10;
            const revenue = slope * productionVolume + intercept + Math.random() * 10;
            data.push([productionVolume, revenue]);
        }
        return data;
    }

    function makeDecision(revenue: number, cost: number) {
        const profitMargin = (revenue - cost) / revenue;

        if (profitMargin > 0.2) {
            return "Buy";
        } else if (profitMargin < 0.1) {
            return "Sell";
        } else {
            return "Hold";
        }
    }

    function addDataSet(data: [number, number][], caseKey: string) {
        const dataset = {
            label: `Case ${caseKey}`,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            data: [] as { x: number; y: number }[]
        };

        data.forEach(point => {
            dataset.data.push({ x: point[0], y: point[1] });
        });
        chartData.datasets.push(dataset);
        addRegressionLine(data, caseKey);
    }

    function addDataPoint(caseKey: string, productionVolume: number, revenue: number) {
        const caseData = cases[caseKey as keyof typeof cases];
        caseData.push([productionVolume, revenue]);
        const datasetIndex = chartData.datasets.findIndex(ds => ds.label === `Case ${caseKey}`);
        chartData.datasets[datasetIndex].data.push({ x: productionVolume, y: revenue });

        addRegressionLine(caseData, caseKey);
    }

    function addRegressionLine(data: [number, number][], caseKey: string) {
        const result = regression.linear(data);
        const x1 = Math.min(...data.map(point => point[0]));
        const x2 = Math.max(...data.map(point => point[0]));
        const y1 = result.equation[0] * x1 + result.equation[1];
        const y2 = result.equation[0] * x2 + result.equation[1];

        const regressionDataset = {
            label: `Regression Line ${caseKey}`,
            borderColor: 'rgba(255, 99, 132, 1)',
            data: [
                { x: x1, y: y1 },
                { x: x2, y: y2 }
            ],
            fill: false
        };

        const existingIndex = chartData.datasets.findIndex(ds => ds.label === `Regression Line ${caseKey}`);
        if (existingIndex !== -1) {
            chartData.datasets.splice(existingIndex, 1);
        }

        chartData.datasets.push(regressionDataset);
    }

    return (
        <Container>
            <Typography variant="h4" textAlign="center" gutterBottom>
                Plant Stock Market Trend Predictor
            </Typography>
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth variant="outlined" margin="normal">
                    <InputLabel id="case-label">Select Case</InputLabel>
                    <Select
                        labelId="case-label"
                        value={selectedCase}
                        onChange={(e) => setSelectedCase(e.target.value as 'A' | 'B' | 'C' | 'D' | 'E')}
                    >
                        <MenuItem value="A">Case A</MenuItem>
                        <MenuItem value="B">Case B</MenuItem>
                        <MenuItem value="C">Case C</MenuItem>
                        <MenuItem value="D">Case D</MenuItem>
                        <MenuItem value="E">Case E</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    label="Revenue (INR)"
                    type="number"
                    value={revenue}
                    onChange={(e) => setRevenue(e.target.value)}
                    required
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Cost (INR)"
                    type="number"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                    required
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Production Volume (Watt)"
                    type="number"
                    value={productionVolume}
                    onChange={(e) => setProductionVolume(e.target.value)}
                    required
                    fullWidth
                    margin="normal"
                />
                <Button variant="contained" type="submit" fullWidth>
                    Add Data
                </Button>
            </form>

            <Typography variant="h5" textAlign="center" marginTop={2}>
                Regression Decision: <span style={{ fontWeight: 'bold', color: '#007bff' }}>{decision}</span>
            </Typography>
            <canvas id="regressionChart" style={{ marginTop: '20px', maxWidth: '800px', display: 'block', margin: 'auto' }}></canvas>
        </Container>
    );
};

export default PlantStockMarketTrendPredictor;
