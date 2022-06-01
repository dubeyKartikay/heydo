import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Navigation from './components/navigation/navigation.component';
import Home from './routes/home/home.route'
function App() {
  return (
    <Routes>
      <Route path ="/" element = {<Navigation/>}>
      <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
