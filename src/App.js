import React from 'react';
// import TheDate from './TheDate';
import Counter from './Counter';

function App() {
  return (
    <main className='App'>
      {<Counter count={123} />}
    </main>
  );
}

export default App;