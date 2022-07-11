import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import './App.css';
import Home from './Views/Home/Home';
import Payment from './Views/Payment/Payment';
import SignIn from './Views/SignIn/SignIn';
import SignUp from './Views/SignUp/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/login' element={<SignIn/>}/>
        <Route path='/pricing' element={<Payment/>}/>
      </Routes>
    </Router>
  );
}

export default App;
