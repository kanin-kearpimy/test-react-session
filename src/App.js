import logo from './logo.svg';
import './App.css';
import Home from './page/Home/Home';
import TestChangeValue from './page/TestChangeValue/TestChangeValue';
import TestFormSummit from './page/TestFormSummit/TestFormSummit';
import IntregationTestValue from './page/IntregationTestValue/IntregationTestValue';

function App() {
  return (
    <div>
      <Home />
      <hr />
      <TestChangeValue />
      <hr />
      <TestFormSummit />
      <hr />
      <IntregationTestValue />
      <hr />
    </div>
  );
}

export default App;
