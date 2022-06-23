import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Navigation from './components/navigation/navigation.component';
import Download from './routes/download/download.route';
import Home from './routes/home/home.route'
import ContactPage from './routes/contact/contact.route';
import Help from './routes/help/help.route';
import Form from './routes/form/form.component';
import Sucess from './routes/sucess/sucess.route';
function App() {

  return (
    <Routes>
      <Route path ="/" element = {<Navigation/>}>
      <Route index element={<Home />} />
      <Route path='download' element={<Download />} />
      <Route path='contact' element={<ContactPage />} />
      <Route path='help' element={<Help />} />
      <Route path='form/:userId' element={<Form />}  />
      <Route path='success' element={<Sucess/>} />
      
      </Route>
    </Routes>
  );
}

export default App;
