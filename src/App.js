import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';
import MainPage from './MainPage';

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        {/* <Main /> */}
        <MainPage />
      </div>
    </BrowserRouter>
  );
}


export default App;
