import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import OptionsGrid from './components/OptionsGrid';
import ErrorPage from './pages/ErrorPage';
import QuizPage from './pages/QuizPage';

const isDev = import.meta.env.MODE === 'development';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        { index: true, element: <OptionsGrid /> },
        { path: 'misc', element: <div></div> },
        { path: 'quiz', element: <QuizPage /> }
      ]
    },
    { path: '*', element: <ErrorPage /> }
  ],
  { basename: isDev ? '/' : '/baby-quiz/' }
);
