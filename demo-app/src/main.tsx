import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Import with error boundary
async function loadApp() {
  try {
    const { GrixApp } = await import('@getgrix/ui');
    
    const root = ReactDOM.createRoot(document.getElementById('root')!);
    root.render(
      <React.StrictMode>
        <GrixApp />
      </React.StrictMode>
    );
  } catch (error) {
    console.error('Failed to load Grix app:', error);
    
    // Fallback UI
    const root = ReactDOM.createRoot(document.getElementById('root')!);
    root.render(
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>🟦 Grix</h1>
        <p>Loading mathematical playground...</p>
        <p style={{ color: 'red' }}>Error: {error instanceof Error ? error.message : 'Unknown error'}</p>
        <p>Check the browser console for more details.</p>
      </div>
    );
  }
}

loadApp();