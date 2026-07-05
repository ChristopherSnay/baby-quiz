import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <nav className="container">
        <AppMenu />
      </nav> */}

      <main className="container my-4">
        <Outlet />
      </main>
    </>
  );
}

export default App;
