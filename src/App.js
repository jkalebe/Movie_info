import './App.css';

import{Container} from 'react-bootstrap'
import Search from './components/Search.jsx';

function App() {
  return (
    <div className="App container">
      <Search/>
      {/* criar rota aqui 
      /movie/mdbID
      */}
    </div>

  );
}

export default App;
