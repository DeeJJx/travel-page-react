import './App.css';
import NavBar from './components/nav/NavBar';
import Card from './components/card/Card';
import data from './data';

function App() {
  const cardElements = data.map(item => {
    return <Card
            key={item.id}
            item={item}
            />
  })
  return (
    <div className="App">
      <NavBar />
      {cardElements}
    </div>
  );
}

export default App;
