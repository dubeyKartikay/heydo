import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/navigation.component';

function App() {
  return (
    <Routes>
      <Route path ="/" element = {<Navigation/>}/>
    </Routes>
  );
}

export default App;
