import './app.scss'
import CardContainer from './components/CardContainer/CardContainer';
import FilterBar from './components/FilterBar/FilterBar';
import Title from './components/Title/Title';

function App() {

  return (
    <>
      <div className="app">
        <Title />
        <FilterBar />
        <CardContainer />
      </div>
    </>
  );
}

export default App;
