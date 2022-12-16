import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './component/Header';
import SignUp from './component/SignUp';
import { Routes,Route } from 'react-router-dom';
import SignIn from './component/SignIn';
import Dummy from './component/Dummy';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<SignUp/>} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/dummy' element={ <Dummy/>} />
      </Routes>
    </div>
  );
}

export default App;
