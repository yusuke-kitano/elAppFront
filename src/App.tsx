import React from 'react';
import { AbcContainer } from './containers/AbcContainer'

const ITEMS = [
  { image: 'http://localhost:8000/images/A.png', lang: 'en-US', word: 'A' },
  { image: 'http://localhost:8000/images/A.png', lang: 'en-US', word: 'B' },
  { image: 'http://localhost:8000/images/A.png', lang: 'en-US', word: 'C' },
  { image: 'http://localhost:8000/images/A.png', lang: 'en-US', word: 'D' },
]

function App() {
  return (
    <div className="App">
      <AbcContainer items={ITEMS} title="英語" />
    </div>
  );
}

export default App;
