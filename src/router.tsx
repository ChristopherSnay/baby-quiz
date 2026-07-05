import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import OptionsGrid from './components/OptionsGrid';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        { index: true, element: <OptionsGrid /> },
        { path: 'misc', element: <div></div> }
      ]
    }
  ],
  { basename: '/' }
);
