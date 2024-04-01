import { useState } from 'react';
import classes from './App.module.css';
import Values from './pages/Values';
import Graphics from './pages/Graphics';

function App() {

  const [page, setPage] = useState('values')

  return (
    <div className={classes.container}>
      <div className={classes.buttons}>
        <button onClick={() => setPage('values')}>Значения</button>
        <button onClick={() => setPage('graphic')}>Графики</button>
      </div>
      <div className={classes.page}>
        {page === 'values' ? <Values/> : <Graphics/>}
      </div>
    </div>
  );
}

export default App;
