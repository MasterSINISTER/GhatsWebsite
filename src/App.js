// import './App.css
// import Footer from './components/Footer';
// import Review from './components/Review';
// import Slider from './components/Slider';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Team from './components/Team';
import Home from './components/Home';
import Support from './components/Support';
import NewForm from './components/NewForm';
import Ghats from './components/Ghats';
import Terms from './components/Terms';
import Gallery from './components/Gallery';
import Practice from './components/Practice';
import ProtectedRoute from './auth/ProtectedRoute';
import Dashboard from './components/Dashboard';


function MyProtectedPage() {
  <Gallery/>
}
function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/login" element={<NewForm />} />
      <Route
        path="/protected"
        element={
          <ProtectedRoute>
            <MyProtectedPage />
          </ProtectedRoute>
        }
      />
      <Route  path='/practice' element={<Practice />}></Route>
        <Route  path='/' element={<Home />}></Route>
        <Route  path='/gallery' element={<Gallery/>}></Route>
        <Route path='/team' element={<Team />}></Route>
        <Route path='/support' element={<Support />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        {/* <Route path='/login' element={<Form />}></Route> */}
        {/* <Route path='/signup' element={<Signup/>}></Route> */}
        <Route path='/login' element={<NewForm/>}></Route>
        <Route path='/ghats' element={<Ghats/>}></Route>
        <Route path='/terms' element={<Terms/>}></Route>
      </Routes>
    </Router>
    </>
  );
}
export default App;
