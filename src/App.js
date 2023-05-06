import './App.css';
import NavBar from './components/NavBar';
import Shop from './components/Shop';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Shop />
      </div>
    </div>
  );
}

export default App;
