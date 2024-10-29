import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';

interface InputFormProps {
  updateChartData: (data: number[]) => void;
}

const InputForm: React.FC<InputFormProps> = ({ updateChartData }) => {
  const [inputs, setInputs] = useState({
    solarIrradiance: 0,
    panelArea: 0,
    efficiency: 0,
    latitude: 0,
    longitude: 0,
    gridEmissionFactor: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInputs({ ...inputs, [id]: parseFloat(value) });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateChartData([
      inputs.solarIrradiance,
      inputs.panelArea,
      inputs.efficiency,
      inputs.latitude,
      inputs.longitude,
      inputs.gridEmissionFactor,
    ]);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          p: 4,
          bgcolor: 'background.paper',
          boxShadow: 3,
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        

        <TextField
          id="solarIrradiance"
          label="Solar Irradiance (kW/m²)"
          type="number"
          variant="outlined"
          fullWidth
          required
          onChange={handleInputChange}
        />
        
        <TextField
          id="panelArea"
          label="Panel Area (m²)"
          type="number"
          variant="outlined"
          fullWidth
          required
          onChange={handleInputChange}
        />

        <TextField
          id="efficiency"
          label="Efficiency (%)"
          type="number"
          variant="outlined"
          fullWidth
          required
          inputProps={{ step: "0.01", min: "0", max: "1" }}
          onChange={handleInputChange}
        />

        <TextField
          id="latitude"
          label="Latitude"
          type="number"
          variant="outlined"
          fullWidth
          required
          onChange={handleInputChange}
        />

        <TextField
          id="longitude"
          label="Longitude"
          type="number"
          variant="outlined"
          fullWidth
          required
          onChange={handleInputChange}
        />

        <TextField
          id="gridEmissionFactor"
          label="Grid Emission Factor (kg CO₂/kWh)"
          type="number"
          variant="outlined"
          fullWidth
          required
          inputProps={{ step: "0.01", min: "0" }}
          onChange={handleInputChange}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Predict
        </Button>
      </Box>
    </Container>
  );
};

export default InputForm;
