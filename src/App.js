import logo from './logo.svg';
import './App.css';
import {useNavigate} from 'react-router-dom';
import Login from './Login';
import { Routes, Route } from 'react-router-dom';


function App() {

  const navigate = useNavigate();

  function ClickSignIn () {
    navigate(Login);
  }



  return (
    <div className="App">
      <div className="Main">
      <Routes>
        <Route path="/Login" element={<Login />} />
      </Routes>
        <div className="SignContent">
          <div className="SignIn" onClick={ClickSignIn}>Sign In </div>
          /
          <div className="SignUp"> Sign Up</div>
        </div>
        <div className="EmotionContent">
          Click your feelings!
          <div className="Emotions">
            <div className="Smile">
              😀
            </div>
            <div className="Love">
              🥰
            </div>
            <div className="Sad">
              😢
            </div>
            <div className="Tired">
              🥱
            </div>
            <div className="Angry">
              🤯
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
