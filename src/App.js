import logo from './logo.svg';
import './App.css';
import Home from './page/Home/Home';
import TestChangeValue from './page/TestChangeValue/TestChangeValue';
import TestFormSummit from './page/TestFormSummit/TestFormSummit';

function App() {
  return (
    <div>
      <Home />
      <hr />
      <TestChangeValue />
      <hr />
      <TestFormSummit />
      <hr />
    </div>
  );
}

export default App;
