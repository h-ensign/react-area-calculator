import { useState } from "react";
import "./App.css";
import { Button, Typography, TextField } from "@mui/material";
import { Form } from "./App.styles";

function App() {
  const [radius, setRadius] = useState("");
  const [volume, setVolume] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (radius < 0) {
      alert("Invalid input. Positive values only");
    } else {
      let result = (4 / 3) * Math.PI * radius ** 3;
      setVolume(result.toFixed(2));
    }
  };
  const handleRadiusChange = (e) => {
    setRadius(e.target.value);
  };
  const handleReload = () => {
    setRadius("");
    setVolume("");
  };
  return (
    <div className="App">
      <div className="container">
        <Typography
          variant="h6"
          sx={{
            width: 250,
            mb: 2,
          }}
        >
          Sphere Volume Calculator
        </Typography>
        <Form onSubmit={handleSubmit}>
          <TextField
            sx={{
              width: 100,
              mb: 2,
            }}
            variant="outlined"
            label="Radius"
            id="outlined-basic"
            value={radius}
            onChange={handleRadiusChange}
          />

          <Button
            variant="contained"
            type="submit"
            sx={{
              width: 100,
              mb: 2,
            }}
          >
            Submit
          </Button>
          <Button
            variant="outlined"
            onClick={handleReload}
            sx={{
              width: 100,
              mb: 2,
            }}
          >
            Reload
          </Button>
        </Form>
        <Typography variant="h6">Volume is {volume}</Typography>
      </div>
    </div>
  );
}

export default App;
