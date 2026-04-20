import React from 'react';
import './App.css';
import { memories } from './data';
import PhotoCard from './PhotoCard';

function App() {
  return (
    <div className="app-wrapper">
      {/* Formas orgánicas de fondo (Blobs) */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      {/* Encabezado con efecto cristal */}
      <header className="hero">
        <div className="hero-content glass-effect">
          <h1>365 Días Contigo</h1>
          <p className="subtitle">Cada momento ha sido un viaje maravilloso</p>
        </div>
      </header>

      {/* Galería estilo Pinterest (Masonry) */}
      <main className="gallery-masonry">
        {memories.map((memory) => (
          <div className="gallery-item" key={memory.id}>
            <PhotoCard memory={memory} />
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;