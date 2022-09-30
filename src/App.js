
import './App.css';
import Header from './components/header/header';
import Ans from './components/q-ans/ans';
import Subject from './components/subjet/subject';

function App() {
  return (
    <div className='back'>
      <Header></Header>
      <Subject></Subject>
      <Ans></Ans>
    </div>
  );
}

export default App;
