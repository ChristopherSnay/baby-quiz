import { Outlet } from 'react-router-dom';
import AppMenu from './components/AppMenu';

function App() {
  return (
    <>
      <main className="container my-4">
        <Outlet />
      </main>
      <nav className="container justify-content-center d-flex my-4">
        <AppMenu />
      </nav>
    </>
  );
}

export default App;
