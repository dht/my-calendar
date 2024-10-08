import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './bootstrap/App';
import './main.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const darkTheme = createTheme({
  palette: {},
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {},
      },
    },
  },
});

const container = document.getElementById('root') ?? document.body;

const root = createRoot(container);

root.render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Router>
      <App />
    </Router>
  </ThemeProvider>
);
