import React from 'react';
import { Navbar } from './components/Navbar';
import { ColorPalette } from './components/ColorPalette';
import { Preview } from './components/Preview';
import { Footer } from './components/Footer';

function App() {
  return (
    <main>
      <Navbar />
      <Preview />
      <Footer />
      <ColorPalette />
    </main>
  );
}

export default App;