import { ThemeProvider } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Main from './layout/Main';
import { theme } from './theme/Theme';

const router = createBrowserRouter([
  {
    element: <Main></Main>,
    path: '/',
    children: [
      {
        element: <Home></Home>,
        path: '/'
      }
    ]
  }
])

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
