import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "styled-components";

function App() {
  const theme = {
    colors: {
      primary: '#ffc5ad',
      secondary: '#2d2c2c',
      white: '#e8e8e8'
    }
  }

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    </Router>
  );
}

export default App;
