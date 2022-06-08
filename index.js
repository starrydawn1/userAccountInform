import app from "./src/app";

const PORT = 4000;

const handleListening = () => {
  console.log(`Server running: http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
