import logo from './logo.svg';
import './App.css';
import Cosmetics from './components/Cosmetics/Cosmetics';
import { add } from './Utilities/Calculate';
import Shoes from './components/Shoes/Shoes';
// import add from './Utilities/Calculate';

function App() {
  const first=55;
  const second=60;
  const total=add(first,second);

  return (
    <div className="App">
      <Cosmetics></Cosmetics>
      <Shoes></Shoes>
      <p>Total: {total}</p>
    </div>
  );
}

export default App;
