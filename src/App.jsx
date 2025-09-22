import React, { Suspense } from 'react';
import './App.css';

const Home = React.lazy(() => import('./pages/Home'));

const Loader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#0d1117' }}>
    <p style={{ color: '#c9d1d9', fontFamily: 'sans-serif' }}>Loading Portfolio...</p>
  </div>
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Home />
    </Suspense>
  );
}

export default App;