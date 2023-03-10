import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ScrollToTop from "./ScrollToTop";
import AnimatedCursor from 'react-animated-cursor';
import Home from "./pages/Home";

function App() {
  const theme = {
    colors: {
      primary: '#ffc5ad',
      primary2: '#fb9a69',
      secondary: '#2d2c2c',
      white: '#e8e8e8'
    }
  }

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ScrollToTop>
          <AnimatedCursor 
           innerSize={15}
           outerSize={25}
           color='255, 197, 173'
           outerAlpha={0.5}
           innerScale={1}
           outerScale={2}
           clickables={[
             'a',
             'button',
             '.link' ]} />
            <Home />
        </ScrollToTop>
      </ThemeProvider>
    </Router>
  );
}

export default App;
