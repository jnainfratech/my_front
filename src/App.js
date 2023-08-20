import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import PlanPage from './Pages/PlanPage';
import TransactionPage from './Pages/TransactionPage';
import ProfilePage from './Pages/ProfilePage';
import Structure from './Pages/Structure';
import VideoPlayer from './Pages/VideoPlayer';




function App() {
  return (
    <Router>
      <div>

        <Routes>
            <Route path="/" Component={HomePage}/>

            <Route path="/login" Component={LoginPage}/>

            <Route path="/register" Component={RegisterPage}/>

            <Route path ='/plans' Component={PlanPage} />

            <Route path = '/Mytransaction' Component={TransactionPage} />

            <Route path = '/Myprofile' Component={ProfilePage} />

            <Route path = '/Structure' Component={Structure} />

            <Route path= '/video' Component={VideoPlayer} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
